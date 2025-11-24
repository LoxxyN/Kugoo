import { ICartItem } from './ICartItem'

export interface ICartStore {
	items: ICartItem[]
	addItem: (item: Omit<ICartItem, 'quantity'>) => void
	deleteItem: (id: string | number) => void
	updateQuantity: (id: string | number, quantity: number) => void
	clearCart: () => void
	getTotalPrice: () => number
	getTotalItems: () => number
}
