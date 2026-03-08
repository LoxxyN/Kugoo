import { IProductCard } from './index'

export interface ICartItem extends IProductCard {
	quantity?: number
}
