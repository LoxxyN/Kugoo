import {
	ProductDescriptionLayoutSkeleton,
	ProductImagesLayoutSkeleton,
} from '@components/index'
import { useProductByIdQuery } from '@hooks/index'
import { lazy } from 'react'
import { Navigate, useParams } from 'react-router'
import './ProductPage.css'

const ProductImagesLayout = lazy(
	() => import('@layouts/ProductImagesLayout/ProductImagesLayout'),
)
const ProductDescriptionLayout = lazy(
	() => import('@layouts/ProductDescriptionLayout/ProductDescriptionLayout'),
)

export const ProductPage = () => {
	const { id } = useParams()

	const {
		data: product,
		isFetching,
		isError,
	} = useProductByIdQuery({
		id: String(id),
		enabled: typeof id !== 'undefined',
	})

	if (isError) return <Navigate to={'/not-found'} /> //Проверка существует ли такой id

	return (
		<section className='product-wrapper'>
			<div className='wrapper flex justify-between'>
				{isFetching || !product ? (
					<>
						<ProductImagesLayoutSkeleton />
						<ProductDescriptionLayoutSkeleton />
					</>
				) : (
					<>
						<ProductImagesLayout product={product?.data} />
						<ProductDescriptionLayout product={product?.data} />
					</>
				)}
			</div>
		</section>
	)
}
