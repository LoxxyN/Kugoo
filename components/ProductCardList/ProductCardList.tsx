import { ProductCard } from '@components/index'
import './ProductCardList.css'
import { PRODUCT_CARD_LIST } from './ProductCardList.data'

export const ProductCardList = () => {
	return (
		<div className='Product-card__list'>
			{PRODUCT_CARD_LIST.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
