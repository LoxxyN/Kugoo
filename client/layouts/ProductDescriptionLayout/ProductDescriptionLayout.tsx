import { ProductCardButton, ProductOptions } from '@components/index'
import {
	useAddCartItem,
	useIsProductInCart,
	useNotifications,
	useRemoveCartItem,
	useUserData,
} from '@hooks/index'
import {
	CircleIcon,
	DeliveryTruckIcon,
	HeartActiveIcon,
	HeartIcon,
	ScalesIcon,
	ShareIcon,
} from '@icons/index'
import { IProductCard, IProductOptions } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button, Divider, message } from 'antd'
import { useState } from 'react'
import './ProductDescriptionLayout.css'

const ProductDescriptionLayout: React.FC<{ product: IProductCard }> = ({
	product,
}) => {
	const addCartItem = useAddCartItem()
	const removeCartItem = useRemoveCartItem()
	const [isHeartActive, setHeartIsActive] = useState(false)
	const { favoriteMessages, cartMessages } = useNotifications()
	const { data: userData } = useUserData()
	const [options, setOptions] = useState<IProductOptions>({
		complectation: 'basic',
		warranty: 'basic',
		additional: 'none',
		packaging: 'none',
	})

	const isLogin = !!userData
	const isProductInCart = useIsProductInCart(product._id)

	const oldPrice =
		typeof product.old_price !== 'undefined' ? product.old_price : 0

	const callFavoriteNotification = () => {
		if (!isHeartActive) {
			favoriteMessages.add()
		} else {
			favoriteMessages.delete()
		}
	}

	const handleAddToFavorite = () => {
		if (!isLogin) return notifyIfNotLogin()

		setHeartIsActive(!isHeartActive)
		callFavoriteNotification()
	}

	//Проверяет залогинен ли пользователь и возвращает уведомление в отрицательном случае
	const notifyIfNotLogin = () => {
		if (!isLogin) {
			return message.warning('Чтобы совершить покупку вам необходимо войти')
		}
	}

	const handleBuyInClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		//Logic of buy in one click
		if (!isLogin) return notifyIfNotLogin()
	}

	const handleAddToCart = () => {
		if (!isLogin) return notifyIfNotLogin()

		if (isProductInCart) {
			removeCartItem.mutate(product._id)
			cartMessages.delete()
		} else {
			addCartItem.mutate(product._id)
			cartMessages.add()
		}
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
					{product.inStock ? (
						<>
							<CircleIcon size={9} fill='#75D14A' />
							<span>В наличии</span>
						</>
					) : (
						<>
							<CircleIcon size={9} fill='#F45A5A' />
							<span>Нет в наличии</span>
						</>
					)}
				</div>
				<div>
					<ScalesIcon size={20} />
					<span>Сравнить</span>
				</div>
				<div role='button' tabIndex={0} onClick={handleCopyLink}>
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
					<img src='/images/installment.webp' alt='installment' />
					<div>
						<span>Рассрочка:</span>
						<p>{splitNumber(1760)}₽ в месяц / 24 месяца</p>
					</div>
				</div>
			</div>

			<ProductOptions
				initialOptions={options}
				onOptionsChange={() => handleOptionsChange}
			/>

			<div className='product__description-buy'>
				<div className='product__description-buy__heading'>
					<h3>{splitNumber(product.price)} руб.</h3>
					<ProductCardButton onClick={handleAddToFavorite}>
						{isHeartActive ? (
							<HeartActiveIcon size={20} />
						) : (
							<HeartIcon size={20} />
						)}
					</ProductCardButton>
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
					<Button
						type='primary'
						onClick={handleBuyInClick}
						disabled={!product.inStock}
					>
						Купить в 1 клик
					</Button>
					<Button onClick={handleAddToCart}>
						{isProductInCart ? 'В корзине' : 'Добавить в корзину'}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductDescriptionLayout
