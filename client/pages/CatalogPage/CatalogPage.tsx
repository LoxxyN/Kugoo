import { CatalogSorting } from '@components/index'
import { useProductsQuery } from '@hooks/index'
import { CatalogProductsLayout } from '@layouts/index'
import { Pagination } from 'antd'
import { useSearchParams } from 'react-router'
import './CatalogPage.css'

export const CatalogPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = Number(searchParams.get('page')) || 1
	const sortBy = searchParams.get('sortBy') ?? 'name'
	const sortDir = searchParams.get('sortDir') ?? 'asc'

	const { data: products } = useProductsQuery({
		page,
		sortBy,
		sortDir,
	})

	const paginationData = products?.pagination

	const sortOptions = [
		{ label: 'Цена', value: 'price' },
		{ label: 'Название', value: 'name' },
		{ label: 'Емкость', value: 'battery' },
		{ label: 'Мощность', value: 'power' },
	]

	const updateSearchParam = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams)
		params.set(key, value)
		setSearchParams(params)
	}

	const onPageChange = (page: number) => updateSearchParam('page', String(page))
	const onSortByChange = (sortBy: string) => updateSearchParam('sortBy', sortBy)
	const onSortDirChange = (sortDir: string) => {
		updateSearchParam('sortDir', sortDir)
	}

	return (
		<section>
			<div className='wrapper'>
				<div className='catalog__filter'>
					<h2>Фильтр</h2>
					<div className='catalog__sorting'>
						<div className='catalog__sorting-filters flex items-center'>
							<span>Сортировать:</span>
							<CatalogSorting
								sortBy={sortBy}
								sortDir={sortDir}
								sortOptions={sortOptions}
								onSortByChange={onSortByChange}
								onSortDirChange={onSortDirChange}
							/>
						</div>
					</div>
				</div>

				<CatalogProductsLayout products={products?.data ?? []} />
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
