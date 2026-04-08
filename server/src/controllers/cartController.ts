import { Context } from 'hono'
import { CartModel, ProductModel } from '../models'

export const cartController = {
	//Получить корзину пользователя
	getCart: async (c: Context) => {
		try {
			const userId = c.get('userId')
			let cart = await CartModel.findOne({ userId })
			if (!cart) {
				cart = new CartModel({ userId, items: [] })
				await cart.save()
			}

			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Ошибка загрузки', errorMessage: `${error}` }, 500)
		}
	},
	//Добавить товар в корзину
	addItem: async (c: Context) => {
		try {
			const userId = c.get('userId')
			const { productId, quantity } = await c.req.json()

			const product = await ProductModel.findById(productId)
			if (!product) {
				return c.json({ success: false, message: 'Товар не найден' }, 404)
			}

			let cart = await CartModel.findOne({ userId })
			if (!cart) {
				cart = await CartModel.create({
					userId,
					items: [],
				})
			}

			const existingItemIndex = cart.items.findIndex(
				item => item.productId?.toString() === productId,
			)

			if (existingItemIndex !== -1) {
				cart.items[existingItemIndex].quantity += quantity
			} else {
				cart.items.push({
					productId: product._id,
					name: product.name,
					price: product.price,
					old_price: product.old_price,
					battery: product.battery,
					power: product.power,
					max_speed: product.max_speed,
					time_of_work: product.time_of_work,
					badge: product.badge,
					image: product.image,
					inStock: product.inStock,
					quantity,
				})
			}

			await cart.save()
			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Added error', error)
			return c.json(
				{ error: 'Ошибка добавления', errorMessage: `${error}` },
				500,
			)
		}
	},
	// Обновить количество товаров в корзине
	updateQuantity: async (c: Context) => {
		try {
			const userId = c.get('userId')
			const { productId } = c.req.param()
			const { quantity } = await c.req.json()

			const newQuantity = parseInt(quantity)
			const cart = await CartModel.findOne({ userId })
			if (!cart)
				return c.json({ success: false, message: 'Корзина не найдена' }, 404)

			const existingItemIndex = cart.items.findIndex(i =>
				i._id.equals(productId),
			)
			if (existingItemIndex === -1)
				return c.json({ success: false, message: 'Товар не найден' }, 404)

			if (newQuantity <= 0) {
				cart.items.splice(existingItemIndex, 1)
			} else {
				cart.items[existingItemIndex].quantity = newQuantity
			}

			await cart.save()
			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Update error', error)
			return c.json(
				{ error: 'Ошибка обновления', errorMessage: `${error}` },
				500,
			)
		}
	},

	//Удалить товар из корзины
	removeItem: async (c: Context) => {
		try {
			const userId = c.get('userId')
			const { productId } = c.req.param()

			await CartModel.updateOne(
				{ userId },
				{ $pull: { items: { _id: productId } } },
			)

			const updatedCart = await CartModel.findOne({ userId }).lean()

			return c.json({ success: true, data: updatedCart })
		} catch (error) {
			console.error('Delete error', error)
			return c.json({ error: 'Ошибка удаления', errorMessage: `${error}` }, 500)
		}
	},

	//Очистить корзину
	clearCart: async (c: Context) => {
		try {
			const userId = c.get('userId')

			await CartModel.updateOne({ userId }, { $set: { items: [] } })

			const updatedCart = await CartModel.findOne({ userId }).lean()
			if (!updatedCart) return c.json({ error: 'Корзина не найдена' }, 404)

			return c.json({
				success: true,
				data: {
					userId: updatedCart.userId,
					items: updatedCart.items,
					createdAt: updatedCart.createdAt,
					updatedAt: updatedCart.updatedAt,
				},
			})
		} catch (error) {
			console.error('Clear error', error)
			return c.json({ error: 'Ошибка очистки', errorMessage: `${error}` }, 500)
		}
	},
}
