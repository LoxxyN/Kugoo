import { CategoryCard } from '@components/index'
import { ICategoryCard } from '@interfaces/ICategoryCard'
import './CategoryCards.css'

export const CategoryCards = ({
	category_cards,
}: {
	category_cards: ICategoryCard[]
}) => {
	return (
		<div className='category-cards'>
			{category_cards.map(card => (
				<CategoryCard
					key={card.id}
					title={card.title}
					price={card.price}
					imageUrl={card.imageUrl}
				/>
			))}
		</div>
	)
}
