import { Badge, ProductDescription } from '@components/index'
import { IProductCard } from '@interfaces/IProductCard'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { productService } from '../../services/productService'
import './ProductPage.css'

export const ProductPage = () => {
	const { id } = useParams()
	const [productItem, setProductItem] = useState<IProductCard | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		loadProductById()
	}, [])

	if (typeof id === 'undefined') return
	const loadProductById = async () => {
		try {
			setLoading(true)
			const data = await productService.getProductById(id)
			setProductItem(data)
			setError(null)
		} catch (err) {
			setError('Не удалось загрузить товары')
			console.error(err)
		} finally {
			//Перемещение экрана наверх при загрузке страницы
			window.scrollTo(0, 0)
			setLoading(false)
		}
	}

	if (loading) return <div>Загрузка товаров...</div>
	if (error) return <div>Ошибка: {error}</div>
	if (productItem === null) return
	//Проверка существует ли такой id
	if (typeof id === 'undefined') {
		return <Navigate to={'/not-found'} />
	}

	return (
		<section className='product-wrapper'>
			<div className='wrapper flex justify-between'>
				<div className='product__images'>
					<div className='product__current-image'>
						<Badge type={productItem ? productItem.badge : ''} />
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
				<ProductDescription product={productItem} />
			</div>
		</section>
	)
}
