import { ProductCardList } from '@components/index'
import { ArrowRight } from '@icons/ArrowRight'
import { Button, Segmented } from 'antd'
import './ProductsLayout.css'

export const ProductsLayout = () => {
	return (
		<section className='products'>
			<div className='products__heading'>
				<h2>Электросамокаты</h2>
				<Segmented
					size='large'
					options={['Хиты продаж', 'Для города', 'Для взрослых', 'Для детей']}
				/>
			</div>
			<ProductCardList />
			<div className='last'>
				<Button className='btn'>Смотреть все</Button>
			</div>

			<div className='help-cards'>
				<div className='help-card'>
					<img
						src='../../public/images/Card-left.svg'
						alt='background image'
						width={540}
						height={235}
					/>
					<div className='help-card__content'>
						<h2>
							Подбор модели <br /> электросамоката
						</h2>
						<p>
							Пройдите тест и выберите <br /> электросамокат по своим критериям
						</p>
						<div className='help-card__link'>
							<a href='#'>Подобрать модель</a>
							<ArrowRight size={12} fill='#6F73EE' />
						</div>
					</div>
				</div>
				<div className='help-card'>
					<img
						src='../../public/images/Card-right.svg'
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
							<ArrowRight size={12} fill='#6F73EE' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
