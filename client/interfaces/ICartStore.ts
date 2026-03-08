import { ICartItem, IProductCard } from './index'

export interface ICartStore {
	items: ICartItem[]
	loading: boolean
	loadCart: () => void
	addItem: (product: IProductCard) => void
	deleteItem: (id: string | number) => void
	incrementQuantity: (id: string | number) => void
	decrementQuantity: (id: string | number) => void
	clearCart: () => void
	getItemQuantity: (id: string | number) => void
	getTotalPriceWithoutDiscount: () => number
	getTotalPrice: () => number
	getTotalDiscount: () => number
	getTotalItems: () => number
	checkItemInCart: (id: string | number) => boolean
}
