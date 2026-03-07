import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI!)

		console.log(
			`MongoDB is connected: ${connection.connection.host}:${connection.connection.port} `,
		)
	} catch (error) {
		console.error('MongoDB connection error', error)
		process.exit(1)
	}
}
