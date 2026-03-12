import mongoose, { Schema } from 'mongoose'
import { IProduct } from '../types/IProduct'

const ProductSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	inStock: { type: Boolean, default: true },
	old_price: Number,
	battery: Number,
	power: Number,
	max_speed: Number,
	time_of_work: Number,
	badge: String,
	image: String,
})

export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema)
