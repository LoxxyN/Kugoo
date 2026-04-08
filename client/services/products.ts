import { IProductCard } from '@interfaces/index'
import { api } from './axios'

interface IPagination {
	total: number
	page: number
	limit: number
	pages: number
}

interface IProductsResponse {
	success: boolean
	data: IProductCard[]
	pagination: IPagination
}

interface IProductResponse {
	success: boolean
	data: IProductCard
}

export const getAllProducts = async (page: number, limit: number) => {
	const response = await api.get<IProductsResponse>('/products', {
		params: { page, limit },
	})

	return response.data
}

export const getProductById = async (id: string | number) => {
	const response = await api.get<IProductResponse>(`/products/${id}`)
	return response.data
}

export const getProductSearch = async (q: string, limit = 9) => {
	const response = await api.get('/products/search', {
		params: { q, limit },
	})
	return response.data
}
