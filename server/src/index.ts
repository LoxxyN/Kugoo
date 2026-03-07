import { serve } from '@hono/node-server'
import dotenv from 'dotenv'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { connectDB } from './config/database'
import { errorHandler } from './middleware/errorHandler'
import cartRouter from './routes/cartRouter'
import productsRouter from './routes/productRouter'

dotenv.config()
connectDB()

const app = new Hono()
const port = process.env.PORT

// ErrorHandler
app.use('*', errorHandler)
// CORS
app.use(
	'/*',
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
)

app.route('/api/products', productsRouter)
app.route('/api/carts', cartRouter)

//Health end-point
app.get('/api/up', c => c.json({ message: 'API is worked' }))

console.log(`API worked on host: http://localhost:${port}/api`)
serve({
	fetch: app.fetch,
	port: Number(port),
})
