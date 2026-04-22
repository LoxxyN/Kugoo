import z from 'zod'

const phoneSchema = z
	.string()
	.min(1, 'Номер телефона обязателен')
	.transform(value => value.replace(/\D/g, ''))
	.refine(
		value =>
			value.length === 11 && (value.startsWith('7') || value.startsWith('8')),
		'Введите корректный номер телефона РФ',
	)
	.transform(value =>
		value.startsWith('8') ? '+7' + value.slice(1) : '+' + value,
	)

const paymentMethodSchema = z.enum([
	'banking',
	'card',
	'cash',
	'online',
	'installment',
	'credit',
])

const recipientSchema = z.object({
	name: z.string().min(2),
	surname: z.string().min(2),
	email: z.email(),
	phoneNumber: phoneSchema,
	paymentMethods: paymentMethodSchema,
	comment: z.string().max(150).optional(),
})

const addressSchema = z.object({
	city: z.string().min(1).max(35),
	street: z.string().min(1).max(35),
	houseNumber: z.string().min(1),
	houseCorps: z.string().optional(),
	appartmentNumber: z.string().optional(),
	cityIndex: z.string().optional(),
})

export const createOrderSchema = z.discriminatedUnion('deliveryMethod', [
	recipientSchema.extend({
		deliveryMethod: z.literal('pickup'),
	}),
	recipientSchema.extend({
		deliveryMethod: z.enum(['courier', 'cdek']),
		...addressSchema.shape,
	}),
])
