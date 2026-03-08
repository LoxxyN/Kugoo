import { ICartItem, ICartStore } from '@interfaces/index'
import { create } from 'zustand'

const API_URL = 'http://localhost:5172/api'
const USER_ID = 'guest'

export const useCartStore = create<ICartStore>((set, get) => ({
	items: [],
	loading: false,

	// Загружаем корзину с сервера
	loadCart: async () => {
		set({ loading: true })
		try {
			const response = await fetch(`${API_URL}/carts/${USER_ID}`)
			const result = await response.json()

			if (result.success) {
				set({ items: result.data.items || [] })
			}
		} catch (error) {
			console.error('Не удалось загрузить корзину:', error)
		} finally {
			set({ loading: false })
		}
	},

	// Добавить товар
	addItem: async product => {
		const newItem: ICartItem = {
			_id: product._id,
			name: product.name,
			price: product.price,
			battery: product.battery,
			power: product.power,
			old_price: product.old_price,
			max_speed: product.max_speed,
			time_of_work: product.time_of_work,
			badge: product.badge,
			quantity: 1,
		}

		try {
			const response = await fetch(`${API_URL}/carts/${USER_ID}/add`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newItem),
			})
			const result = await response.json()

			if (result.success) {
				set({ items: result.data.items })
			}
		} catch (error) {
			console.error('Ошибка при добавлении:', error)
		}
	},

	// Удалить товар
	deleteItem: async id => {
		const prevItems = get().items
		set({ items: prevItems.filter(item => item._id !== id) })
		try {
			const response = await fetch(`${API_URL}/carts/${USER_ID}/remove/${id}`, {
				method: 'DELETE',
			})
			const result = await response.json()

			if (result.success) {
				set({ items: result.data.items })
			}
		} catch (error) {
			console.error('Ошибка при удалении:', error)
		}
	},

	// Увеличить количество
	incrementQuantity: async id => {
		const item = get().items.find(i => i._id === id)
		if (!item) return

		try {
			const response = await fetch(`${API_URL}/carts/${USER_ID}/update/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ quantity: (item.quantity || 1) + 1 }),
			})
			const result = await response.json()

			if (result.success) {
				set({ items: result.data.items })
			}
		} catch (error) {
			console.error('Ошибка при увеличении:', error)
		}
	},

	// Уменьшить количество
	decrementQuantity: async id => {
		const item = get().items.find(i => i._id === id)
		if (!item) return

		const newQuantity = (item.quantity || 1) - 1

		if (newQuantity <= 0) {
			await get().deleteItem(id)
		} else {
			try {
				const response = await fetch(
					`${API_URL}/carts/${USER_ID}/update/${id}`,
					{
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ quantity: newQuantity }),
					},
				)
				const result = await response.json()

				if (result.success) {
					set({ items: result.data.items })
				}
			} catch (error) {
				console.error('Ошибка при уменьшении:', error)
			}
		}
	},

	// Очистить корзину
	clearCart: async () => {
		try {
			const response = await fetch(`${API_URL}/carts/${USER_ID}/clear`, {
				method: 'POST',
			})
			const result = await response.json()

			if (result.success) {
				set({ items: result.data.items || [] })
			}
		} catch (error) {
			console.error('Ошибка при очистке:', error)
		}
	},

	// Геттеры
	getItemQuantity: id => {
		const item = get().items.find(i => i._id === id)
		return item ? item.quantity : 0
	},

	getTotalPriceWithoutDiscount: () => {
		return get().items.reduce((total, item) => {
			const quantity = item.quantity || 1
			const originalPrice = item.old_price || item.price
			return total + originalPrice * quantity
		}, 0)
	},

	getTotalPrice: () => {
		return get().items.reduce(
			(total, item) => total + item.price * (item.quantity || 1),
			0,
		)
	},

	getTotalDiscount: () => {
		return get().items.reduce((total, item) => {
			const quantity = item.quantity || 1
			if (item.old_price && item.old_price > item.price) {
				return total + (item.old_price - item.price) * quantity
			}
			return total
		}, 0)
	},

	getTotalItems: () => {
		return get().items.reduce((total, item) => total + (item.quantity || 1), 0)
	},

	checkItemInCart: id => {
		return get().items.some(item => item._id === id)
	},
}))
