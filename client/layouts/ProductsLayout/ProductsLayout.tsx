import { CardListSkeleton } from '@components/index'
import { useProductsQuery } from '@hooks/useProducts'
import { ArrowRightIcon } from '@icons/index'
import { Button } from 'antd'
import { lazy, Suspense } from 'react'
import './ProductsLayout.css'

const ProductCardList = lazy(
	() => import('@components/ProductCardList/ProductCardList'),
)

export const ProductsLayout = () => {
	const { data: products } = useProductsQuery({ page: 1, limit: 8 })
	if (typeof products === 'undefined') return

	return (
		<section className='products'>
			<div className='wrapper'>
				<div className='products__heading'>
					<h2>Электросамокаты</h2>
				</div>
				<Suspense
					fallback={
						<CardListSkeleton className='grid grid-cols-4 grid-rows-2 gap-7.5' />
					}
				>
					<ProductCardList products={products?.data} />
				</Suspense>

				<div className='show-all__button'>
					<Button type='link' className='button'>
						<a href='/catalog'>Смотреть все</a>
					</Button>
				</div>

				<div className='help-cards'>
					<div className='help-card'>
						<img
							src='/images/card-left.svg'
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
							src='/images/card-right.svg'
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
