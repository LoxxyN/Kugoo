import { CatalogSorting } from '@components/index'
import { useCatalogSorting, useProductsQuery } from '@hooks/index'
import { CatalogProductsLayout } from '@layouts/index'
import { Pagination } from 'antd'
import { useSearchParams } from 'react-router'
import './CatalogPage.css'

export const CatalogPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = Number(searchParams.get('page')) || 1
	const { data: products } = useProductsQuery({
		page: page,
	})

	const paginationData = products?.pagination
	const { sortedProducts, sortBy, sortOptions, setSortBy } = useCatalogSorting(
		products?.data ?? [],
	)

	const onPageChange = (page: number) => setSearchParams({ page: String(page) })

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
				<Pagination
					current={page}
					onChange={onPageChange}
					total={paginationData?.total}
					align='center'
				/>
			</div>
		</section>
	)
}
