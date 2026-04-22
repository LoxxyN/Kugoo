import { Context } from 'hono'
import { CartModel, OrderModel, ProductModel } from '../models'

export const orderController = {
	create: async (c: Context) => {
		const userId = c.get('userId')
		const form = c.get('validateBody')

		const cart = await CartModel.findOne({ userId }).lean()
		if (!cart || cart.items.length === 0) {
			return c.json({ success: false, error: 'Cart is empty' }, 400)
		}

		const {
			city,
			street,
			houseNumber,
			houseCorps,
			appartmentNumber,
			cityIndex,
			...restForm
		} = form

		const address =
			restForm.deliveryMethod === 'pickup'
				? undefined
				: {
						city: city,
						street: street,
						houseNumber: houseNumber,
						houseCorps: houseCorps,
						appartmentNumber: appartmentNumber,
						cityIndex: cityIndex,
					}

		const productIds = cart.items.map(i => i.productId)
		const products = await ProductModel.find({
			_id: { $in: productIds },
		}).lean()

		const byId = new Map(products.map(p => [String(p._id), p]))

		for (const cartItem of cart.items) {
			const product = byId.get(String(cartItem.productId))
			if (!product) {
				return c.json(
					{
						success: false,
						error: `Product not found: ${cartItem.productId}`,
					},
					400,
				)
			}
			if (!product.inStock) {
				return c.json(
					{
						success: false,
						error: `Product out of stock: ${product._id}`,
					},
					400,
				)
			}

			const quantity = Number(cartItem.quantity) || 0
			if (quantity <= 0) {
				return c.json(
					{
						success: false,
						error: `Invalid quantity for: ${product._id}`,
					},
					400,
				)
			}
		}

		const orderItems = cart.items.map(cartItem => {
			const product = byId.get(String(cartItem.productId))!
			const quantity = Number(cartItem.quantity)

			return {
				productId: product._id,
				quantity,
				name: product.name,
				price: product.price,
				old_price: product.old_price,
				battery: product.battery,
				max_speed: product.max_speed,
				time_of_work: product.time_of_work,
				badge: product.badge,
				image: product.image,
			}
		})

		const total = orderItems.reduce(
			(sum, item) => sum + item?.price * item?.quantity,
			0,
		)

		try {
			const order = await OrderModel.create({
				userId,
				items: orderItems,
				total,
				status: 'created',
				...restForm,
				address,
			})

			await CartModel.updateOne({ userId }, { $set: { items: [] } })

			return c.json({ success: true, data: { orderId: order._id } }, 201)
		} catch (error) {
			console.error('Order error', error)
			return c.json({ success: false, error: 'Order error' }, 500)
		}
	},
}
