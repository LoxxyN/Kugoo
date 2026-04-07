import { api } from './axios'

export const getCart = async () => {
	try {
		const response = await api.get('/carts')

		return response
	} catch (error) {
		console.error('getCart error:', error)
		throw error
	}
}

export const addToCart = async (productId: string) => {
	try {
		const response = await api.post(`/carts/add`, {
			productId,
			quantity: 1,
		})

		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const updateCartItem = async (productId: string, quantity: number) => {
	try {
		const response = await api.put(`/carts/update/${productId}`, {
			quantity,
		})

		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const removeCartItem = async (productId: string) => {
	try {
		const response = await api.delete(`/carts/remove/${productId}`)

		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const clearCart = async () => {
	try {
		const response = await api.post('/carts/clear')

		return response.data
	} catch (error) {
		console.error(error)
	}
}
