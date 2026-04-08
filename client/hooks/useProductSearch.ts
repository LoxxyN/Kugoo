import { getProductSearch } from '@services/products'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from './useDebounce'

export const useProductSearch = (q: string) => {
	const debounce = useDebounce(q.trim(), 350)

	return useQuery({
		queryKey: ['product-search', debounce],
		queryFn: () => getProductSearch(debounce, 8),
		enabled: debounce.length >= 2,
		staleTime: 30_000,
	})
}
