import { Context, Next } from 'hono'
import { ZodSchema } from 'zod'

export const validate = (schema: ZodSchema) => {
	return async (c: Context, next: Next) => {
		const body = await c.req.json()
		const result = schema.safeParse(body)

		if (!result.success) {
			return c.json(
				{
					message: 'Ошибка валидации',
					errors: result.error.flatten(),
				},
				400,
			)
		}

		c.set('validateBody', result.data)

		await next()
	}
}
