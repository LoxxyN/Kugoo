import { Hono } from 'hono'
import { cartController } from '../controllers/index'
import { authMiddleware } from '../middleware/index'

const cartRouter = new Hono()

cartRouter.get('/', authMiddleware, cartController.getCart)
cartRouter.post('/add', authMiddleware, cartController.addItem)
cartRouter.put('/update/:itemId', authMiddleware, cartController.updateQuantity)
cartRouter.delete('/remove/:itemId', authMiddleware, cartController.removeItem)
cartRouter.post('/clear', authMiddleware, cartController.clearCart)

export default cartRouter
