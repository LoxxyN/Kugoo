import { IProductCard } from './../interfaces/IProductCard'
const API_URL = 'http://localhost:5172/api'

export const productService = {
	async getAllProducts(): Promise<IProductCard[]> {
		try {
			const response = await fetch(`${API_URL}/products`)
			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.error || 'Ошибка загрузки')
			}
			return result.data
		} catch (error) {
			console.error('Error fetching products:', error)
			throw error
		}
	},

	async getProductById(id: string): Promise<IProductCard> {
		try {
			const response = await fetch(`${API_URL}/products/${id}`)
			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.error || 'Товар не найден')
			}

			return result.data
		} catch (error) {
			console.error('Error fetching product:', error)
			throw error
		}
	},
}
