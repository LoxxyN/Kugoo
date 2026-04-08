import { Hono } from 'hono'
import { productController } from '../controllers/index'
const productsRouter = new Hono()

productsRouter.get('/search', productController.search)
productsRouter.get('/', productController.getAll)
productsRouter.get('/:id', productController.getOne)
productsRouter.post('/', productController.create)
productsRouter.put('/:id', productController.update)
productsRouter.delete('/:id', productController.delete)

export default productsRouter
