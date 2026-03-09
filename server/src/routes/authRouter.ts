import { Hono } from 'hono'
import { authController } from '../controllers/index'

const authRouter = new Hono()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)

export default authRouter
