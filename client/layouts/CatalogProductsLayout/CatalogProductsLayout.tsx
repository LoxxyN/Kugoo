import { AsideFilter, CardListSkeleton } from '@components/index'
import { IProductCard } from '@interfaces/IProductCard'
import { lazy, Suspense } from 'react'

const ProductCardList = lazy(
	() => import('@components/ProductCardList/ProductCardList'),
)

export const CatalogProductsLayout: React.FC<{ products: IProductCard[] }> = ({
	products,
}) => {
	return (
		<div className='catalog__products-wrapper'>
			<Suspense
				fallback={
					<CardListSkeleton className='grid grid-cols-3 grid-rows-2 gap-7.5' />
				}
			>
				<ProductCardList isCatalogPage products={products} />
			</Suspense>
			<AsideFilter />
		</div>
	)
}
