import { AsideFilter, CatalogSorting, ProductCardList } from '@components/index'
import { useCatalogSorting } from '@hooks/index'
import { IProductCard } from '@interfaces/index'
import { productService } from '@services/index'
import { useEffect, useState } from 'react'
import './CatalogPage.css'

export const CatalogPage = () => {
	const [productItems, setProductItems] = useState<IProductCard[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const { products, sortBy, sortOptions, setSortBy } =
		useCatalogSorting(productItems)

	useEffect(() => {
		loadProducts()
	}, [])

	const loadProducts = async () => {
		try {
			setLoading(true)
			const data = await productService.getAllProducts()
			setProductItems(data)
			setError(null)
		} catch (err) {
			setError('Не удалось загрузить товары')
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	if (loading) return <div>Загрузка товаров...</div>
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

				<div className='catalog__products-wrapper'>
					{productItems.length > 0 ? (
						<ProductCardList isCatalogPage products={products} />
					) : (
						<div>Загрузка товаров...</div>
					)}
					<AsideFilter />
				</div>
			</div>
		</section>
	)
}
