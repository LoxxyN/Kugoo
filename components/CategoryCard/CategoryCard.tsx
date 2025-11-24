import type { ICategoryCard } from '@interfaces/index'
import { formatNumber } from '@utils/formatNumber'
import { Card } from 'antd'
import './CategoryCard.css'

export const CategoryCard = ({ title, price, imageUrl }: ICategoryCard) => {
	return (
		<Card className='category-card' hoverable>
			<img src={imageUrl} alt='image' height={255} width={255} />
			<div className='category-card__description'>
				<h3 className='category-card__title'>{title}</h3>
				<p className='category-card__price'>{formatNumber(price)} ₽</p>
			</div>
		</Card>
	)
}
