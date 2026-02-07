import { AsideFilter, CatalogSorting, ProductCardList } from '@components/index'
import { useCatalogSorting } from '@hooks/index'
import './CatalogPage.css'

export const CatalogPage = () => {
	const { products, sortBy, sortOptions, setSortBy } = useCatalogSorting()

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
					<ProductCardList isCatalogPage products={products} />
					<AsideFilter />
				</div>
			</div>
		</section>
	)
}
