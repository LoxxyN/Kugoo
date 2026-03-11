import { rateLimiter } from 'hono-rate-limiter'

export const rateLimit = rateLimiter({
	windowMs: 60 * 1000,
	limit: 5,
	keyGenerator: c => {
		return c.req.header('x-forwarded-for') ?? 'unknown'
	},
})
