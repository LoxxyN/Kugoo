import { Context } from 'hono'
import { CartModel } from '../models/Cart'

export const cartController = {
	//Получить корзину пользователя
	getCart: async (c: Context) => {
		try {
			const userId = c.req.param('userId')
			let cart = await CartModel.findOne({ userId })
			if (!cart) {
				cart = new CartModel({ userId, items: [] })
				await cart.save()
			}

			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Ошибка загрузки' }, 500)
		}
	},
	//Добавить товар в корзину
	addItem: async (c: Context) => {
		try {
			const userId = c.req.param('userId')
			const item = await c.req.json()

			let cart = await CartModel.findOne({ userId })
			if (!cart) {
				cart = new CartModel({ userId, items: [item] })
			} else {
				const existingIndex = cart.items.findIndex(i => i.id === item.id)

				if (existingIndex >= 0) {
					cart.set(
						`items.${existingIndex}.quantity`,
						cart.items[existingIndex].quantity + 1,
					)
				} else {
					cart.items.push(item)
				}
			}

			await cart.save()
			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Added error', error)
			return c.json({ error: 'Ошибка добавления' }, 500)
		}
	},
	// Обновить количество товаров в корзине
	updateQuantity: async (c: Context) => {
		try {
			const { userId, itemId } = c.req.param()
			const { quantity } = await c.req.json()

			const cart = await CartModel.findOne({ userId })
			if (!cart) return c.json({ error: 'Корзина не найдена' }, 404)

			const existingIndex = cart.items.findIndex(i => i.id === itemId)

			if (existingIndex === -1) {
				return c.json({ error: 'Товар не найден' }, 404)
			}

			if (quantity <= 0) {
				cart.items.pull({ id: itemId })
			} else {
				cart.set(`items.${existingIndex}.quantity`, quantity)
			}

			await cart.save()
			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Update error', error)
			return c.json({ error: 'Ошибка обновления' }, 500)
		}
	},

	//Удалить товар из корзины
	removeItem: async (c: Context) => {
		try {
			const { userId, itemId } = c.req.param()

			const cart = await CartModel.findOne({ userId })
			if (!cart) return c.json({ error: 'Корзина не найдена' }, 404)

			cart.items.pull({ id: itemId })
			await cart.save()

			return c.json({ succes: true, data: cart })
		} catch (error) {
			console.error('Delete error', error)
			return c.json({ error: 'Ошибка удаления' }, 500)
		}
	},

	//Очистить корзину
	clearCart: async (c: Context) => {
		try {
			const userId = c.req.param('userId')

			await CartModel.updateOne({ userId }, { $set: { items: [] } })

			const cart = CartModel.findOne({ userId })
			if (!cart) return c.json({ error: 'Корзина не найдена' }, 404)

			return c.json({ success: true, data: cart })
		} catch (error) {
			console.error('Clear error', error)
			return c.json({ error: 'Ошибка очистки' }, 500)
		}
	},
}
