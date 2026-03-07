import { Hono } from 'hono'
import { cartController } from '../controllers/cartController'

const cartRouter = new Hono()

cartRouter.get('/:userId', cartController.getCart)
cartRouter.post('/:userId/add', cartController.addItem)
cartRouter.put('/:userId/update/:itemId', cartController.updateQuantity)
cartRouter.delete('/:userId/remove/:itemId', cartController.removeItem)
cartRouter.post('/:userId/clear', cartController.clearCart)

export default cartRouter
