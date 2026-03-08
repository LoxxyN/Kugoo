import mongoose from 'mongoose'

const CartItemSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true, default: 1 },
	inStock: { type: Boolean, default: true },
	old_price: Number,
	battery: Number,
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
