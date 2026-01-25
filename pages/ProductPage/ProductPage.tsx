import { Badge, ProductDescription } from '@components/index'
import './ProductPage.css'

export const ProductPage = () => {
	return (
		<section className='product-wrapper'>
			<div className='wrapper flex justify-between'>
				<div className='product__images'>
					<div className='product__current-image'>
						<Badge type='new' />
						<img src='/images/scooter.svg' alt='product image' />
					</div>
					<div className='product__images-list'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<ProductDescription />
			</div>
		</section>
	)
}
