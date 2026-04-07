import type { TBadge } from '@interfaces/index'

export interface IProductCard {
	_id: string
	price: number
	old_price?: number
	name: string
	inStock?: boolean
	battery?: number
	power?: string
	max_speed?: number
	time_of_work?: number
	badge?: TBadge
}
