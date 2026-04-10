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
