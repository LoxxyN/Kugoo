import { useDebounce } from '@hooks/index'
import { getProductSearch } from '@services/index'
import { useQuery } from '@tanstack/react-query'

export const useProductSearch = (q: string) => {
	const debounce = useDebounce(q.trim(), 350)

	return useQuery({
		queryKey: ['product-search', debounce],
		queryFn: () => getProductSearch(debounce, 8),
		enabled: debounce.length >= 2,
		staleTime: 1000 * 30,
	})
}
