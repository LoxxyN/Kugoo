import { ProductCardList } from '@components/index'
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
			<div>
				<Button className='btn'>Смотреть все</Button>
			</div>
		</section>
	)
}
