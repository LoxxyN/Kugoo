import { Document } from 'mongoose'

export interface IProduct extends Document {
	name: string
	price: number
	inStock: boolean
	old_price: number
	battery: number
	power: number
	max_speed: number
	time_of_work: number
	badge: string
	image: string
}
