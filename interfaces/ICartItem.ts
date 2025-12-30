import { IProductCard } from './index'

export interface ICartItem extends Omit<IProductCard, 'old_price'> {
	quantity: number
}
