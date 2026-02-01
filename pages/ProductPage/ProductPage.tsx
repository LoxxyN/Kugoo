import { Badge, ProductDescription } from '@components/index'
import { PRODUCT_CARD_LIST } from '@utils/mocks/CatalogMock.data'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router'
import './ProductPage.css'

export const ProductPage = () => {
	const { id } = useParams()

	//Перемещение экрана наверх при загрузке страницы
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	//Проверка существует ли такой id
	if (typeof id === 'undefined') {
		return <Navigate to={'/not-found'} />
	}

	const productId = parseInt(id)
	const product = PRODUCT_CARD_LIST.find(item => item.id === productId)
	if (typeof product === 'undefined') return

	return (
		<section className='product-wrapper'>
			<div className='wrapper flex justify-between'>
				<div className='product__images'>
					<div className='product__current-image'>
						<Badge type={product.badge} />
						<img src='/images/scooter.svg' alt='product image' />
					</div>
					<div className='product__images-list'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<ProductDescription product={product} />
			</div>
		</section>
	)
}
