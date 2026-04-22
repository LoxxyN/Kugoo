import { Context, Next } from 'hono'
import { getCookie } from 'hono/cookie'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { IJWTPayload } from '../types/index'

export const authMiddleware = async (c: Context, next: Next) => {
	const token = getCookie(c, 'token')
	if (!token) return c.json({ error: 'Пользователь не авторизирован' }, 401)

	try {
		const payload = jwt.verify(token, JWT_SECRET) as IJWTPayload
		c.set('userId', payload.userId)

		await next()
	} catch (error) {
		console.error('Loading error', error)
		return c.json({ error: 'Некорректный токен' }, 401)
	}
}
