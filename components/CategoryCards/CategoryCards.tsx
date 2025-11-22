import { CategoryCard } from "../CategoryCard/CategoryCard";
import { CATEGORY_CARDS_DATA } from "./CategoryCards.data";
import './CategoryCards.css'

export const CategoryCards = () => {
    return (
        <div className='category-cards'>
            {CATEGORY_CARDS_DATA.map((card) => (
                <CategoryCard key={card.id} title={card.title} price={card.price} imageUrl={card.imageUrl} />
            ))}
        </div>
    )
}