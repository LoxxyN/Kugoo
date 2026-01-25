import { ICartItem } from '@interfaces/ICartItem'
import { ICartStore } from '@interfaces/ICartStore'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create<ICartStore>()(
	persist(
		(set, get) => ({
			items: [],

			addItem: product =>
				set(state => {
					const existedItem = state.items.find(item => item.id === product.id)

					if (existedItem) {
						return {
							items: state.items.map(item =>
								item.id === product.id ? { ...item } : { ...item },
							),
						}
					} else {
						const cartItem: ICartItem = {
							id: product.id,
							name: product.name,
							price: product.price,
							battery: product.battery,
							power: product.power,
							max_speed: product.max_speed,
							time_of_work: product.time_of_work,
							badge: product.badge,
							quantity: 1,
						}
						return {
							items: [...state.items, cartItem],
						}
					}
				}),

			deleteItem: id =>
				set(state => {
					return {
						items: state.items.filter(item => item.id !== id),
					}
				}),

			incrementQuantity: id =>
				set(state => {
					const item = state.items.find(item => item.id === id)
					if (!item) return state

					const newQuantity = item.quantity + 1

					if (newQuantity > 10) {
						return state
					}

					return {
						items: state.items.map(item =>
							item.id === id ? { ...item, quantity: newQuantity } : item,
						),
					}
				}),

			decrementQuantity: id =>
				set(state => {
					const item = state.items.find(item => item.id === id)
					if (!item) return state

					const newQuantity = item.quantity - 1

					if (newQuantity <= 0) {
						return {
							items: state.items.filter(item => item.id !== id),
						}
					}

					return {
						items: state.items.map(item =>
							item.id === id ? { ...item, quantity: newQuantity } : item,
						),
					}
				}),

			clearCart: () =>
				set(() => {
					return { items: [] }
				}),

			getItemQuantity: id => {
				const item = get().items.find(i => i.id === id)
				return item ? item.quantity : 0
			},

			getTotalPrice: () => {
				return get().items.reduce(
					(total, item) => total + item.price * item.quantity,
					0,
				)
			},

			getTotalItems: () => {
				return get().items.reduce((total, item) => total + item.quantity, 0)
			},

			checkItemInCart: id => {
				const items = get().items
				if (!items.find(item => item.id === id)) {
					return false
				}
				return true
			},
		}),
		{
			name: 'cart-storage',
		},
	),
)
