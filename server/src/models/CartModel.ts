import mongoose, { Schema } from 'mongoose'

const CartItemSchema = new mongoose.Schema({
	quantity: { type: Number, required: true, default: 1 },
	productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
	inStock: Boolean,
	price: Number,
	old_price: Number,
	battery: Number,
	name: String,
	power: Number,
	max_speed: Number,
	time_of_work: Number,
	badge: String,
	image: String,
})

const CartSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true, unique: true },
		items: [CartItemSchema],
	},
	{
		timestamps: true,
	},
)

export const CartModel = mongoose.model('Cart', CartSchema)
