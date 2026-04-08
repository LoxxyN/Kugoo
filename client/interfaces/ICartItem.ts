import { IProductCard } from './index'

export interface ICartItem extends IProductCard {
	productId: string
	quantity: number
}
