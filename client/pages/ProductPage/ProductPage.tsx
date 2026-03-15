import {
	ProductDescriptionLayoutSkeleton,
	ProductImagesLayoutSkeleton,
} from '@components/index'
import { IProductCard } from '@interfaces/index'
import { productService } from '@services/index'
import { lazy, Suspense, useEffect, useState } from 'react'
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
	const [product, setProduct] = useState<IProductCard | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (typeof id === 'undefined') return
		const loadProductById = async () => {
			try {
				const data = await productService.getProductById(id)
				setProduct(data)
				setError(null)
			} catch (err) {
				setError('Не удалось загрузить товары')
				console.error(err)
			} finally {
				//Перемещение экрана наверх при загрузке страницы
				window.scrollTo(0, 0)
			}
		}
		loadProductById()
	}, [id])

	if (error) return <div>Ошибка: {error}</div>
	if (product === null) return
	//Проверка существует ли такой id
	if (typeof id === 'undefined') {
		return <Navigate to={'/not-found'} />
	}

	return (
		<section className='product-wrapper'>
			<div className='wrapper flex justify-between'>
				<Suspense fallback={<ProductImagesLayoutSkeleton />}>
					<ProductImagesLayout product={product} />
				</Suspense>
				<Suspense fallback={<ProductDescriptionLayoutSkeleton />}>
					<ProductDescriptionLayout product={product} />
				</Suspense>
			</div>
		</section>
	)
}
