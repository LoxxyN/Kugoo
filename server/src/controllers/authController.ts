import bcrypt from 'bcrypt'
import { Context } from 'hono'
import { deleteCookie } from 'hono/cookie'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { UserModel } from '../models/index'
import { IJWTPayload } from '../types/IJWTPayload'

export const authController = {
	register: async (c: Context) => {
		const { email, password } = await c.req.json()
		const user = await UserModel.findOne({ email })

		if (user?.email === email) {
			return c.json({ message: 'Такой аккаунт уже существует' })
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = await UserModel.create({
			email,
			password: hashedPassword,
		})

		return c.json({
			success: true,
			userId: newUser._id,
		})
	},

	login: async (c: Context) => {
		const { email, password } = await c.get('validateBody')

		const user = await UserModel.findOne({ email })
		if (!user) {
			return c.json({ error: 'Пользователь не найден' }, 404)
		}

		const isValidPassword = await bcrypt.compare(password, user.password)
		const isValidEmail = user?.email === email
		if (!isValidPassword || !isValidEmail) {
			return c.json({ error: 'Неверный логин или пароль' }, 401)
		}

		const payload: IJWTPayload = {
			userId: user._id.toString(),
		}

		const token = jwt.sign(payload, JWT_SECRET, {
			expiresIn: '7d',
		})
		c.header(
			'Set-Cookie',
			`token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`,
		)

		return c.json({
			success: true,
			message: 'Пользователь успешно авторизировался',
		})
	},

	logout: async (c: Context) => {
		deleteCookie(c, 'token')

		return c.json({ success: true, message: 'Пользователь вышел из системы' })
	},

	getUser: async (c: Context) => {
		const userId = c.get('userId')

		return c.json({ userId })
	},
}
