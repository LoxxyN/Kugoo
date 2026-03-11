import { Hono } from 'hono'
import { authController } from '../controllers/index'
import { authMiddleware, validate } from '../middleware/index'
import { loginSchema, registerSchema } from '../schemas'

const authRouter = new Hono()

authRouter.post('/register', validate(registerSchema), authController.register)
authRouter.post('/login', validate(loginSchema), authController.login)
authRouter.post('/logout', authController.logout)
authRouter.get('/me', authMiddleware, authController.getUser)

export default authRouter
