import { ProductCard } from '@components/index'
import './ProductCardList.css'
import { PRODUCT_CARD_LIST } from './ProductCardList.data'

export const ProductCardList = () => {
	return (
		<div className='Product-card__list'>
			{PRODUCT_CARD_LIST.map(card => (
				<ProductCard
					key={card.id}
					price={card.price}
					old_price={card.old_price}
					name={card.name}
					battery={card.battery}
					power={card.power}
					max_speed={card.max_speed}
					time_of_work={card.time_of_work}
					badge={card.badge}
				/>
			))}
		</div>
	)
}
