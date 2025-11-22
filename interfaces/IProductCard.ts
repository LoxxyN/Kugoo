import type { TBadge } from '@interfaces/index'

export interface IProductCard {
	id?: number
	price: number
	old_price: number
	name: string
	battery: number
	power: string
	max_speed: number
	time_of_work: number
	badge?: TBadge
}
