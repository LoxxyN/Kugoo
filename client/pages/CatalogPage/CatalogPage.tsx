import { CatalogSorting } from '@components/index'
import { useCatalogSorting } from '@hooks/index'
import { IProductCard } from '@interfaces/index'
import { CatalogProductsLayout } from '@layouts/CatalogProductsLayout/CatalogProductsLayout'
import { productService } from '@services/index'
import { useEffect, useState } from 'react'
import './CatalogPage.css'

export const CatalogPage = () => {
	const [productItems, setProductItems] = useState<IProductCard[]>([])
	const [error, setError] = useState<string | null>(null)
	const { sortedProducts, sortBy, sortOptions, setSortBy } =
		useCatalogSorting(productItems)

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await productService.getAllProducts()
				setProductItems(data)
				setError(null)
			} catch (err) {
				setError('Не удалось загрузить товары')
				console.error(err)
			}
		}

		loadProducts()
	}, [])

	if (error) return <div>Ошибка: {error}</div>

	return (
		<section>
			<div className='wrapper'>
				<div className='catalog__filter'>
					<h2>Фильтр</h2>
					<div className='catalog__sorting'>
						<span>Сортировать:</span>
						<div className='catalog__sorting-filters'>
							<CatalogSorting
								onSortChange={setSortBy}
								sortBy={sortBy}
								sortOptions={sortOptions}
							/>
						</div>
					</div>
				</div>

				<CatalogProductsLayout products={sortedProducts} />
			</div>
		</section>
	)
}
