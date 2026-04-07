import { Badge } from '@components/index'
import { IProductCard } from '@interfaces/index'

const ProductImagesLayout: React.FC<{
	product: IProductCard
}> = ({ product }) => {
	return (
		<div className='product__images'>
			<div className='product__current-image'>
				<Badge type={product ? product.badge : ''} />
				<img src='/images/scooter.svg' alt='product image' />
			</div>

			<div className='product__images-list'>
				{productImages.map(item => (
					<div key={item.id}>
						<img src={item.src} alt='product image' />
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductImagesLayout

//Временное решение до момента расширения модели в базе
const productImages = [
	{ id: 1, src: '/images/scooter.svg' },
	{ id: 2, src: '/images/scooter.svg' },
	{ id: 3, src: '/images/scooter.svg' },
	{ id: 4, src: '/images/scooter.svg' },
	{ id: 5, src: '/images/scooter.svg' },
	{ id: 6, src: '/images/scooter.svg' },
	{ id: 7, src: '/images/scooter.svg' },
	{ id: 8, src: '/images/scooter.svg' },
	{ id: 9, src: '/images/scooter.svg' },
	{ id: 10, src: '/images/scooter.svg' },
]
