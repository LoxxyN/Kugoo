import { serve } from '@hono/node-server'
import dotenv from 'dotenv'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { connectDB } from './config/database'
import { errorHandler } from './middleware/index'
import {
	authRouter,
	cartRouter,
	orderRouter,
	productsRouter,
} from './routes/index'

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
		origin: [process.env.FRONTEND_URL || '', 'http://localhost:5173'].filter(
			Boolean,
		),
		credentials: true,
	}),
)

app.route('/api/products', productsRouter)
app.route('/api/carts', cartRouter)
app.route('/api/auth', authRouter)
app.route('/api/order', orderRouter)

//Health end-point
app.get('/api/up', c => c.json({ message: 'API is worked' }))

console.log(`API worked on host: http://localhost:${port}/api`)
serve({
	fetch: app.fetch,
	port: Number(port),
})

//Разобраться с регистрацией
