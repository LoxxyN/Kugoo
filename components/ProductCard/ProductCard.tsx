import { Badge, ProductCardButton } from '@components/index'
import { useMessage } from '@hooks/useMessage'
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
import { useCartStore } from '@store/index'
import { splitNumber } from '@utils/index'
import { Button, Card } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import './ProductCard.css'

export const ProductCard: React.FC<{ product: IProductCard }> = ({
	product,
}) => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [isScalesActive, setIsScalesActive] = useState(false)

	const { addItem, deleteItem, checkItemInCart } = useCartStore()
	const { cartMessages, favoriteMessages } = useMessage()
	const navigate = useNavigate()

	const productInCart = checkItemInCart(product?.id)

	//При клике на карточку перемещаемся на этот URL
	const handleClick = () => {
		navigate(`/catalog/${product.id}`, {
			state: { fromCatalog: true },
		})
	}

	const handleAddToCart = (e: MouseEvent) => {
		e.stopPropagation()
		if (productInCart) {
			deleteItem(product.id)
			cartMessages.delete()
		} else {
			cartMessages.add()
			addItem(product)
		}
	}

	const handleAddToFavorite = (e: MouseEvent) => {
		e.stopPropagation()
		setHeartIsActive(!isHeartActive)
		if (!isHeartActive) {
			favoriteMessages.add()
		} else {
			favoriteMessages.delete()
		}
	}

	return (
		<Card className='card' hoverable onClick={handleClick}>
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
								<p className='card__price--old'>
									{splitNumber(product.old_price)} ₽
								</p>
								<p className='card__price--actual'>
									{splitNumber(product.price)} ₽
								</p>
							</div>
							<div className='card__buttons'>
								<ProductCardButton
									children={
										productInCart ? (
											<CartActiveIcon size={20} />
										) : (
											<CartIcon size={20} />
										)
									}
									onClick={e => handleAddToCart(e)}
								/>

								<ProductCardButton
									children={
										isHeartActive ? (
											<HeartActiveIcon size={20} />
										) : (
											<HeartIcon size={20} />
										)
									}
									onClick={e => handleAddToFavorite(e)}
								/>
							</div>
						</div>
						<Button type='primary' className='w-full rounded-md'>
							Купить в 1 клик
						</Button>
					</div>
				</div>
			</div>
		</Card>
	)
}
