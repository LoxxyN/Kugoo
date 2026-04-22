import { Hono } from 'hono'
import { orderController } from '../controllers/orderController'
import { authMiddleware, validate } from '../middleware'
import { createOrderSchema } from '../schemas/orderSchemas'

const orderRouter = new Hono()

orderRouter.post(
	'/create',
	authMiddleware,
	validate(createOrderSchema),
	orderController.create,
)

export default orderRouter
