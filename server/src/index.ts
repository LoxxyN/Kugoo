import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import mongoose from 'mongoose'

const app = new Hono()

app.use(
	'/*',
	cors({
		origin: ['http://localhost:5173'],
		allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowHeaders: ['Content-type'],
	}),
)

mongoose
	.connect('mongodb://127.0.1.11:27017/shop')
	.then(() => console.log('DB CONNECT'))
	.catch(err => console.error('DB NOT WORK', err))

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
	old_price: Number,
	battery: String,
	power: String,
	max_speed: String,
	time_of_work: String,
	badge: String,
})

const Product = mongoose.model('Product', productSchema)

//health check endpoint
app.get('/api/up', c => {
	return c.json({
		message: 'API WORKED',
		timestamp: new Date().toISOString(),
	})
})

//Get all products from DB
app.get('/api/products', async c => {
	try {
		const products = await Product.find()
		return c.json({
			success: true,
			count: products.length,
			data: products,
		})
	} catch (err) {
		console.error('Error: ', err)
		return c.json({ error: 'Ошибка загрузки' }, 500)
	}
})

//Get product by id from DB
app.get('/api/products/:id', async c => {
	try {
		const id = parseInt(c.req.param('id'))
		const product = await Product.findById(id)

		if (!product) {
			return c.json({ error: 'Товар не найден' }, 404)
		}

		return c.json({
			success: true,
			data: product,
		})
	} catch (err) {
		console.error('Error: ', err)
		return c.json({ error: 'Ошибка загрузки' }, 500)
	}
})

const port = process.env.PORT || 5171

console.log(`Сервер запущен на http://localhost:${port}/api`)

serve({
	fetch: app.fetch,
	port: Number(port),
})
