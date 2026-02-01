import { AsideFilter, ProductCard } from '@components/index'
import { PRODUCT_CARD_LIST } from '@utils/mocks/CatalogMock.data'
import { Button } from 'antd'
import './CatalogPage.css'

export const CatalogPage = () => {
	return (
		<section>
			<div className='wrapper'>
				<div className='catalog__filter'>
					<h2>Фильтр</h2>
					<div className='catalog__sorting'>
						<span>Сортировать:</span>
						<div className='catalog__sorting-filters'>
							<Button type='default'>По цене</Button>
							<Button type='default'>По дальности хода</Button>
						</div>
					</div>
				</div>

				<div className='catalog__products-wrapper'>
					<div className='catalog__products'>
						{PRODUCT_CARD_LIST.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
					<AsideFilter />
				</div>
			</div>
		</section>
	)
}
