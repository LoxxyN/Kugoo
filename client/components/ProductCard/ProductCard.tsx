import { Badge, ProductCardButton } from '@components/index'
import {
	useAddCartItem,
	useIsProductInCart,
	useNotifications,
	useRemoveCartItem,
	useUserData,
} from '@hooks/index'
import {
	AccumulatorIcon,
	CartActiveIcon,
	CartIcon,
	HeartActiveIcon,
	HeartIcon,
	LightningIcon,
	ScalesIcon,
	SpeedometerIcon,
	TimerIcon,
} from '@icons/index'
import { IProductCard } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button, Card, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import './ProductCard.css'

export const ProductCard: React.FC<{ product: IProductCard }> = ({
	product,
}) => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [isScalesActive, setIsScalesActive] = useState(false)
	const { cartMessages, favoriteMessages } = useNotifications()
	const { data: userData } = useUserData()
	const navigate = useNavigate()

	const AddItemMutation = useAddCartItem()
	const DeleteItemMutation = useRemoveCartItem()
	const isItemInCart = useIsProductInCart(product._id)
	const isLogin = !!userData

	//При клике на карточку перемещаемся на этот URL
	const handleNavigateToProduct = () => {
		navigate(`/catalog/${product._id}`, {
			state: { fromCatalog: true },
		})
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

	const handleAddToCart = (e: React.MouseEvent) => {
		e.stopPropagation()
		if (!isLogin) return notifyIfNotLogin()

		if (isItemInCart) {
			DeleteItemMutation.mutate(product._id)
			cartMessages.delete()
		} else {
			AddItemMutation.mutate(product._id)
			cartMessages.add()
		}
	}

	const handleAddToFavorite = (e: React.MouseEvent) => {
		e.stopPropagation()
		if (!isLogin) return notifyIfNotLogin()

		setHeartIsActive(!isHeartActive)
		if (!isHeartActive) {
			favoriteMessages.add()
		} else {
			favoriteMessages.delete()
		}
	}

	const oldPrice = typeof product.old_price !== 'undefined' && product.old_price

	return (
		<Card className='card' hoverable onClick={handleNavigateToProduct}>
			<div className='card__top'>
				<div className='card__top-actions'>
					{product.badge && <Badge type={product.badge} />}
					<ProductCardButton onClick={() => setIsScalesActive(!isScalesActive)}>
						{isScalesActive ? (
							<ScalesIcon fill='#6F73EE' />
						) : (
							<ScalesIcon fill='#5D6C7B' />
						)}
					</ProductCardButton>
				</div>
				<div className='card__image'>
					<img src='/images/scooter.svg' alt='scooter' />
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__description'>
					<h3 className='card__title'>{product.name}</h3>
					<div className='card__characteristics'>
						<div>
							<div className='card__characteristic'>
								<AccumulatorIcon fill='#5D6C7B' />
								<p>{product.battery} mAh</p>
							</div>
							<div className='card__characteristic'>
								<LightningIcon fill='#5D6C7B' />
								<p>{product.power} л.с.</p>
							</div>
						</div>
						<div>
							<div className='card__characteristic'>
								<SpeedometerIcon fill='#5D6C7B' />
								<p>{product.max_speed} км/ч</p>
							</div>
							<div className='card__characteristic'>
								<TimerIcon fill='#5D6C7B' />
								<p>{product.time_of_work} часов</p>
							</div>
						</div>
					</div>
					<div className='card__bottom-actions'>
						<div>
							<div className='card__price'>
								{oldPrice && (
									<p className='card__price--old'>{splitNumber(oldPrice)} ₽</p>
								)}
								<p className='card__price--actual'>
									{splitNumber(product.price)} ₽
								</p>
							</div>
							<div className='card__buttons'>
								<ProductCardButton onClick={() => handleAddToCart}>
									{isItemInCart ? (
										<CartActiveIcon size={20} />
									) : (
										<CartIcon size={20} />
									)}
								</ProductCardButton>

								<ProductCardButton onClick={() => handleAddToFavorite}>
									{isHeartActive ? (
										<HeartActiveIcon size={20} />
									) : (
										<HeartIcon size={20} />
									)}
								</ProductCardButton>
							</div>
						</div>
						<Button
							type='primary'
							onClick={handleBuyInClick}
							className='w-full rounded-md'
						>
							Купить в 1 клик
						</Button>
					</div>
				</div>
			</div>
		</Card>
	)
}
