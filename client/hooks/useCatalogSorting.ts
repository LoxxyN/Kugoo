import { IProductCard } from '@interfaces/index'
import { useEffect, useMemo, useState } from 'react'

export const useCatalogSorting = (initialProducts: IProductCard[]) => {
	const [products, setProducts] = useState<IProductCard[]>(initialProducts)
	const [sortBy, setSortBy] = useState('default')

	useEffect(() => {
		setProducts(initialProducts)
	}, [initialProducts])

	const sortOptions = [
		{ value: 'default', label: 'По-умолчанию' },
		{ value: 'price_asc', label: 'Дешевле' },
		{ value: 'price_desc', label: 'Дороже' },
		{ value: 'name_asc', label: 'По названию (А-Я)' },
		{ value: 'name_desc', label: 'По названию (Я-А)' },
	]

	const sortedProducts = useMemo(() => {
		if (!products) return []

		switch (sortBy) {
			case 'price_asc':
				return products.sort((a, b) => a.price - b.price)
			case 'price_desc':
				return products.sort((a, b) => b.price - a.price)
			case 'name_asc':
				return products.sort((a, b) => a.name.localeCompare(b.name))
			case 'name_desc':
				return products.sort((a, b) => b.name.localeCompare(a.name))
			default:
				return products
		}
	}, [sortBy, products])

	return {
		sortedProducts,
		sortBy,
		setSortBy,
		sortOptions,
	}
}
