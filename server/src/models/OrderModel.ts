import mongoose, { Schema } from 'mongoose'

const OrderItemSchema = new mongoose.Schema({
	quantity: { type: Number, required: true },
	productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },

	name: String,
	price: Number,
	old_price: Number,
	battery: Number,
	power: Number,
	max_speed: Number,
	time_of_work: Number,
	badge: String,
})

const AddressSchema = new mongoose.Schema({
	city: String,
	street: String,
	houseCorps: String,
	houseNumber: String,
	appartmentNumber: String,
	cityIndex: String,
})

const OrderSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true, index: true },
		items: { type: [OrderItemSchema], required: true },
		total: { type: Number, required: true },
		status: { type: String, required: true, default: 'created' },
		deliveryMethod: { type: String, required: true },
		paymentMethods: { type: String, required: true },
		name: { type: String, required: true },
		surname: { type: String, required: true },
		email: { type: String, required: true },
		phoneNumber: { type: String, required: true },
		comment: String,
		address: AddressSchema,
	},
	{ timestamps: true },
)

export const OrderModel = mongoose.model('Order', OrderSchema)
