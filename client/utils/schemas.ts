import z from 'zod'

export const emailSchema = z.email('Неверный формат email')

export const passwordSchema = z
	.string()
	.min(6, 'Минимум 6 символов')
	.regex(/[A-Z]/, 'Минимум одна заглавная буква')
	.regex(/[0-9]/, 'Минимум одна цифра')

export const phoneSchema = z
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

export const registerFormSchema = z
	.object({
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export const loginFormSchema = z.object({
	email: emailSchema,
	password: z.string().min(1, 'Введите пароль'),
})

export const deliveryMethodSchema = z.enum(['pickup', 'courier', 'cdek'])

export const deliveryAddressSchema = z.object({
	city: z.string().min(1, 'Обязательное поле').max(35, 'Максимум 35 символов'),
	street: z
		.string()
		.min(1, 'Обязательное поле')
		.max(35, 'Максимум 35 символов'),
	houseNumber: z.string('').min(1, 'Обязательное поле'),
	houseCorps: z.string().optional(),
	appartmentNumber: z.string().optional(),
	cityIndex: z.string().optional(),
})

export const orderRecipientForm = z.object({
	name: z.string().min(2, 'Обязательное поле'),
	surname: z.string().min(2, 'Обязательное поле'),
	email: emailSchema,
	phoneNumber: phoneSchema,
	comment: z.string().max(150, 'Максимальная длина 150 символов').optional(),
})

export const paymentMethodSchema = z.enum([
	'banking',
	'card',
	'cash',
	'online',
	'installment',
	'credit',
])

const commonField = {
	paymentMethods: paymentMethodSchema,
	...orderRecipientForm.shape,
}

export const orderFormSchema = z.discriminatedUnion('deliveryMethod', [
	z.object({
		deliveryMethod: z.literal('pickup'),
		...commonField,
	}),

	z.object({
		deliveryMethod: z.enum(['courier', 'cdek']),
		...commonField,
		...deliveryAddressSchema.shape,
	}),
])

export type IOrderForm = z.infer<typeof orderFormSchema>
