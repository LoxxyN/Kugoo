import { Badge, ProductCardButton } from '@components/index'
import {
	Accumulator,
	Cart,
	CartActive,
	Heart,
	HeartActive,
	Lightning,
	Scales,
	Speedometer,
	Timer,
} from '@icons/index'
import type { IProductCard } from '@interfaces/index'
import { useCartStore } from '@store/index'
import { formatNumber } from '@utils/index'
import { Button, Card } from 'antd'
import { useState } from 'react'
import './ProductCard.css'

export const ProductCard: React.FC<{ product: IProductCard }> = ({
	product,
}) => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [isCartActive, setCartIsActive] = useState(false)
	const [isScalesActive, setIsScalesActive] = useState(false)
	const { addItem } = useCartStore()

	return (
		<Card className='card' hoverable>
			<div className='card__top'>
				<div className='card__top-actions'>
					{product.badge && <Badge type={product.badge} />}
					<ProductCardButton onClick={() => setIsScalesActive(!isScalesActive)}>
						{isScalesActive ? (
							<Scales fill='#6F73EE' />
						) : (
							<Scales fill='#5D6C7B' />
						)}
					</ProductCardButton>
				</div>
				<div className='card__image'>
					<img src='../../public/images/scooter.svg' alt='moped' />
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__description'>
					<h3 className='card__title'>{product.name}</h3>
					<div className='card__characteristics'>
						<div>
							<div className='card__characteristic'>
								<Accumulator fill='#5D6C7B' />
								<p>{product.battery} mAh</p>
							</div>
							<div className='card__characteristic'>
								<Lightning fill='#5D6C7B' />
								<p>{product.power} л.с.</p>
							</div>
						</div>
						<div>
							<div className='card__characteristic'>
								<Speedometer fill='#5D6C7B' />
								<p>{product.max_speed} км/ч</p>
							</div>
							<div className='card__characteristic'>
								<Timer fill='#5D6C7B' />
								<p>{product.time_of_work} часов</p>
							</div>
						</div>
					</div>
					<div className='card__bottom-actions'>
						<div>
							<div className='card__price'>
								<p className='card__price--old'>
									{formatNumber(product.old_price)} ₽
								</p>
								<p className='card__price--actual'>
									{formatNumber(product.price)} ₽
								</p>
							</div>
							<div className='card__buttons'>
								<ProductCardButton
									children={
										isCartActive ? (
											<CartActive size={20} fill='#6F73EE' />
										) : (
											<Cart size={20} fill='#6F73EE' />
										)
									}
									onClick={() => {
										addItem(product)
										setCartIsActive(!isCartActive)
									}}
								/>
								<ProductCardButton
									children={
										isHeartActive ? (
											<HeartActive size={20} />
										) : (
											<Heart size={20} />
										)
									}
									onClick={() => {
										setHeartIsActive(!isHeartActive)
									}}
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
