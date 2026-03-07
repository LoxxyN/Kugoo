import { Context } from 'hono'

export const errorHandler = async (c: Context, next: () => Promise<void>) => {
	try {
		await next()
	} catch (error) {
		console.error('Ошибка: ', error)
		return c.json({ error: 'Внутреняя ошибка сервера' }, 500)
	}
}
