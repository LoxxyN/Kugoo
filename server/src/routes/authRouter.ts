import { Hono } from 'hono'
import { authController } from '../controllers/index'
import { authMiddleware, rateLimit, validate } from '../middleware/index'
import { loginSchema, registerSchema } from '../schemas'

const authRouter = new Hono()

authRouter.post(
	'/register',
	validate(registerSchema),
	rateLimit,
	authController.register,
)
authRouter.post(
	'/login',
	validate(loginSchema),
	rateLimit,
	authController.login,
)
authRouter.post('/logout', authController.logout)
authRouter.get('/me', authMiddleware, authController.getUser)

export default authRouter
