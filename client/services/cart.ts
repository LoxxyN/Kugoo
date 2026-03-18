import { ICartItem } from '@interfaces/index'
import { api } from './axios'

export const getCart = async () => {
	const response = await api.get('/carts')
	return response.data
}

export const addToCart = async (product: ICartItem) => {
	const response = await api.post<ICartItem>(`/carts/add/`, { product })
	return response.data
}

export const updateCartItem = async (id: string, quantity: number) => {
	const response = await api.put(`/carts/update/${id}`, { quantity })
	return response.data
}

export const removeCartItem = async (id: string) => {
	const response = await api.delete(`/carts/remove/${id}`)
	return response.data
}

export const clearCart = async () => {
	const response = await api.post('/carts/clear')
	return response.data
}
