import { getAllProducts, getProductById } from '@services/products'
import { useQuery } from '@tanstack/react-query'

export const useProductsQuery = ({
	page = 1,
	limit = 9,
	sortBy,
	sortDir,
}: {
	page: number
	sortBy: string
	sortDir: string
	limit?: number
}) => {
	return useQuery({
		queryKey: ['products', page, limit, sortBy, sortDir],
		queryFn: () => getAllProducts(page, limit, sortBy, sortDir),
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
