import { ProductCardButton, ProductOptions } from '@components/index'
import { useNotifications } from '@hooks/index'
import {
	CircleIcon,
	DeliveryTruckIcon,
	HeartActiveIcon,
	HeartIcon,
	ScalesIcon,
	ShareIcon,
} from '@icons/index'
import { IProductCard, IProductOptions } from '@interfaces/index'
import { useCartStore } from '@store/index'
import { splitNumber } from '@utils/index'
import { Button, Divider, message } from 'antd'
import { useState } from 'react'
import './ProductDescription.css'

export const ProductDescription: React.FC<{ product: IProductCard }> = ({
	product,
}) => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [options, setOptions] = useState<IProductOptions>({
		complectation: 'basic',
		warranty: 'basic',
		additional: 'none',
		packaging: 'none',
	})
	const { addItem, deleteItem, checkItemInCart } = useCartStore()
	const { cartMessages, favoriteMessages } = useNotifications()

	const productInCart = checkItemInCart(product?._id)
	const oldPrice =
		typeof product.old_price !== 'undefined' ? product.old_price : 0

	const callFavoriteNotification = () => {
		if (!isHeartActive) {
			favoriteMessages.add()
		} else {
			favoriteMessages.delete()
		}
	}

	const handleAddToCart = () => {
		if (productInCart) {
			deleteItem(product._id)
			cartMessages.delete()
		} else {
			cartMessages.add()
			addItem(product)
		}
	}

	const handleAddToFavorite = () => {
		setHeartIsActive(!isHeartActive)
		callFavoriteNotification()
	}

	const handleCopyLink = () => {
		navigator.clipboard.writeText(document.location.href)
		message.info('Ссылка скопирована')
	}

	const handleOptionsChange = (newOptions: IProductOptions) => {
		setOptions(prev => ({
			...prev,
			...newOptions,
		}))
	}

	return (
		<div className='product__description'>
			<h2>{product.name}</h2>
			<div className='product__description-info'>
				<span>Просмотров 350</span>
				<span>Купили 196 раз</span>
				<span>Артикул: 2200000000026</span>
			</div>
			<div className='product__description-actions'>
				<div>
					<CircleIcon size={9} fill='#75D14A' />
					<span>В наличии</span>
				</div>
				<div>
					<ScalesIcon size={20} />
					<span>Сравнить</span>
				</div>
				<div onClick={handleCopyLink}>
					<ShareIcon />
					<span>Поделиться</span>
				</div>
			</div>
			<div className='product__description-pricing'>
				<div className='product__description-price'>
					{oldPrice !== 0 && <span>{splitNumber(oldPrice)}₽</span>}
					<p>{splitNumber(product.price)}₽</p>
				</div>
				<div className='product__description-installment'>
					<img src='/images/installment.png' alt='installment' />
					<div>
						<span>Рассрочка:</span>
						<p>{splitNumber(1760)}₽ в месяц / 24 месяца</p>
					</div>
				</div>
			</div>

			<ProductOptions
				initialOptions={options}
				onOptionsChange={handleOptionsChange}
			/>

			<div className='product__description-buy'>
				<div className='product__description-buy__heading'>
					<h3>{splitNumber(product.price)} руб.</h3>
					<ProductCardButton
						children={
							isHeartActive ? (
								<HeartActiveIcon size={20} />
							) : (
								<HeartIcon size={20} />
							)
						}
						onClick={handleAddToFavorite}
					/>
				</div>
				<Divider />
				<div className='product__description-buy__delivery'>
					<DeliveryTruckIcon />
					<div>
						<p>Бесплатная доставка по РФ</p>
						<span>от 1 дня при заказе до 01.09</span>
					</div>
				</div>
				<div className='product__description-buy__buttons'>
					<Button type='primary'>Купить в 1 клик</Button>
					<Button onClick={handleAddToCart}>
						{productInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
					</Button>
				</div>
			</div>
		</div>
	)
}
