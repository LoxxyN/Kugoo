import { ICartItem, IProductCard } from './index'

export interface ICartStore {
	items: ICartItem[]
	addItem: (product: IProductCard) => void
	deleteItem: (id: string | number) => void
	incrementQuantity: (id: string | number) => void
	decrementQuantity: (id: string | number) => void
	clearCart: () => void
	getItemQuantity: (id: string | number) => void
	getTotalPrice: () => number
	getTotalItems: () => number
	checkItemInCart: (id: string | number) => boolean
}
