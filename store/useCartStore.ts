import { ICartStore } from '@interfaces/ICartStore'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create<ICartStore>()(
	persist(
		(set, get) => ({
			items: [],

			addItem: cartItem => {
				set(state => {
					const existedItem = state.items.find(item => item.id === cartItem.id)

					if (existedItem) {
						return {
							items: state.items.map(item =>
								item.id === cartItem.id
									? { ...item, quantity: item.quantity + 1 }
									: item
							),
						}
					}

					return {
						items: [...state.items, { ...cartItem, quantity: 1 }],
					}
				})
			},

			deleteItem: id => {
				set(state => ({
					items: state.items.filter(item => item.id !== id),
				}))
			},

			updateQuantity: (id, quantity) => {
				if (quantity <= 0) {
					get().deleteItem(id)
					return
				}

				set(state => ({
					items: state.items.map(item =>
						item.id === id ? { ...item, quantity } : item
					),
				}))
			},

			clearCart: () => {
				set({ items: [] })
			},

			getTotalPrice: () => {
				const { items } = get()
				return items.reduce(
					(total, item) => total + item.price * item.quantity,
					0
				)
			},

			getTotalItems: () => {
				const { items } = get()
				return items.reduce((total, item) => total + item.quantity, 0)
			},
		}),
		{
			name: 'cart-storage',
		}
	)
)
