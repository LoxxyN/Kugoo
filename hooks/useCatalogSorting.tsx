import { IProductCard } from '@interfaces/IProductCard'
import { PRODUCT_CARD_LIST } from '@utils/mocks/CatalogMock.data'
import { useMemo, useState } from 'react'

export const useCatalogSorting = (initialProducts = PRODUCT_CARD_LIST) => {
	const [products] = useState<IProductCard[]>(initialProducts)
	const [sortBy, setSortBy] = useState('default')

	const productsCopy = [...products]

	const sortOptions = [
		{ value: 'default', label: 'По-умолчанию' },
		{ value: 'price_asc', label: 'Дешевле' },
		{ value: 'price_desc', label: 'Дороже' },
		{ value: 'name_asc', label: 'По названию (А-Я)' },
		{ value: 'name_desc', label: 'По названию (Я-А)' },
	]

	const sortedProducts = useMemo(() => {
		if (!productsCopy) return []

		switch (sortBy) {
			case 'price_asc':
				return productsCopy.sort((a, b) => a.price - b.price)
			case 'price_desc':
				return productsCopy.sort((a, b) => b.price - a.price)
			case 'name_asc':
				return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
			case 'name_desc':
				return productsCopy.sort((a, b) => b.name.localeCompare(a.name))
			default:
				return productsCopy
		}
	}, [products, sortBy])

	return {
		products: sortedProducts,
		sortBy,
		setSortBy,
		sortOptions,
	}
}
