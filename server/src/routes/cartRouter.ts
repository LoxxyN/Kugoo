import { Hono } from 'hono'
import { cartController } from '../controllers/index'
import { authMiddleware } from '../middleware/index'

const cartRouter = new Hono()

cartRouter.use('*', authMiddleware)

cartRouter.get('/', cartController.getCart)
cartRouter.post('/add', cartController.addItem)
cartRouter.put('/update/:itemId', cartController.updateQuantity)
cartRouter.delete('/remove/:itemId', cartController.removeItem)
cartRouter.post('/clear', cartController.clearCart)

export default cartRouter
