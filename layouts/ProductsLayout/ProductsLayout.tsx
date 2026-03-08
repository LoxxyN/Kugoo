import { ProductCardList } from '@components/index'
import { ArrowRightIcon } from '@icons/index'
import { IProductCard } from '@interfaces/IProductCard'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { productService } from '../../services/productService'
import './ProductsLayout.css'

export const ProductsLayout = () => {
	const [productItems, setProductItems] = useState<IProductCard[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
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
		<section className='products'>
			<div className='wrapper'>
				<div className='products__heading'>
					<h2>Электросамокаты</h2>
				</div>
				<ProductCardList products={productItems} />
				<div className='show-all__button'>
					<Button type='link' className='button'>
						<a href='/catalog'>Смотреть все</a>
					</Button>
				</div>

				<div className='help-cards'>
					<div className='help-card'>
						<img
							src='/images/Card-left.svg'
							alt='background image'
							width={540}
							height={235}
						/>
						<div className='help-card__content'>
							<h2>
								Подбор модели <br /> электросамоката
							</h2>
							<p>
								Пройдите тест и выберите <br /> электросамокат по своим
								критериям
							</p>
							<div className='help-card__link'>
								<a href='#'>Подобрать модель</a>
								<ArrowRightIcon size={12} fill='#6F73EE' />
							</div>
						</div>
					</div>
					<div className='help-card'>
						<img
							src='/images/Card-right.svg'
							alt='background image'
							width={540}
							height={235}
						/>
						<div className='help-card__content'>
							<h2>
								Сервисное <br /> обслуживание
							</h2>
							<p>
								Крупнейший сервисный центр <br /> в России для продуктов Kugoo
							</p>
							<div className='help-card__link'>
								<a href='#'>Подобрать модель</a>
								<ArrowRightIcon size={12} fill='#6F73EE' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
