import { ProductCard } from '@components/index'
import { IProductCard } from '@interfaces/index'
import { cn } from '@utils/index'
import './ProductCardList.css'

const ProductCardList: React.FC<{
	products: IProductCard[]
	isCatalogPage?: boolean
}> = ({ products, isCatalogPage }) => {
	//Проверка на наличие списка с товарами и есть ли в нем товары
	if (!products || products.length === 0) return <h2>Товары отсутствуют</h2>
	return (
		<div
			className={cn(isCatalogPage ? 'catalog__products' : 'product-card__list')} //На какой странице отображать нужную сетку
		>
			{products.map(product => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	)
}

export default ProductCardList
