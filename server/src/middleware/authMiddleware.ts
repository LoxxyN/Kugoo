import { Context, Next } from 'hono'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { IJWTPayload } from '../types/index'

export const authMiddleware = async (c: Context, next: Next) => {
	const cookie = c.req.header('cookie')
	if (!cookie) {
		return c.json({ error: 'Пользователь не авторизирован' }, 401)
	}

	const token = cookie.split('token=')[1]

	try {
		const payload = jwt.verify(token, JWT_SECRET) as IJWTPayload

		c.set('userId', payload.userId)

		await next()
	} catch (error) {
		console.error('Loading error', error)
		return c.json({ error: 'Некорректный токен' }, 401)
	}
}
