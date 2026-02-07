import { ProductCard } from '@components/index'
import { IProductCard } from '@interfaces/IProductCard'
import { cn } from '@utils/className'
import './ProductCardList.css'

export const ProductCardList: React.FC<{
	products: IProductCard[]
	isCatalogPage?: boolean
}> = ({ products, isCatalogPage }) => {
	//Проверка на наличие списка с товарами и есть ли в нем товары
	if (!products || products.length === 0) return <h2>Товары отсутствуют</h2>

	return (
		<div
			className={cn(
				//На какой странице отображать нужную сетку
				isCatalogPage ? 'catalog__products' : 'product-card__list',
			)}
		>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
