import { getAllProducts, getProductById } from '@services/products'
import { useQuery } from '@tanstack/react-query'

export const useProductsQuery = ({
	page = 1,
	limit = 9,
}: {
	page: number
	limit?: number
}) => {
	return useQuery({
		queryKey: ['products', page, limit],
		queryFn: () => getAllProducts(page, limit),
	})
}

export const useProductByIdQuery = ({
	id,
	enabled,
}: {
	id: string | number
	enabled: boolean
}) => {
	return useQuery({
		queryKey: ['product', id],
		queryFn: () => getProductById(id),
		enabled: enabled,
	})
}
