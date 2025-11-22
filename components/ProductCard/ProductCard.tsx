import { Badge, Button } from '@components/index'
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
import { formatNumber } from '@utils/index'
import { Button as Btn, Card } from 'antd'
import { useState } from 'react'
import './ProductCard.css'

export const ProductCard = ({
	price,
	old_price,
	name,
	battery,
	power,
	max_speed,
	time_of_work,
	badge,
}: IProductCard) => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [isCartActive, setCartIsActive] = useState(false)
	const [isScalesActive, setIsScalesActive] = useState(false)

	return (
		<Card className='card' hoverable>
			<div className='card__top'>
				<div className='card__top-actions'>
					{badge && <Badge type={badge} />}
					<Button onClick={() => setIsScalesActive(!isScalesActive)}>
						{isScalesActive ? (
							<Scales fill='#6F73EE' />
						) : (
							<Scales fill='#5D6C7B' />
						)}
					</Button>
				</div>
				<div className='card__image'>
					<img src='../../public/images/scooter.svg' alt='moped' />
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__description'>
					<h3 className='card__title'>{name}</h3>
					<div className='card__characteristics'>
						<div>
							<div className='card__characteristic'>
								<Accumulator fill='#5D6C7B' />
								<p>{battery} mAh</p>
							</div>
							<div className='card__characteristic'>
								<Lightning fill='#5D6C7B' />
								<p>{power} л.с.</p>
							</div>
						</div>
						<div>
							<div className='card__characteristic'>
								<Speedometer fill='#5D6C7B' />
								<p>{max_speed} км/ч</p>
							</div>
							<div className='card__characteristic'>
								<Timer fill='#5D6C7B' />
								<p>{time_of_work} часов</p>
							</div>
						</div>
					</div>
					<div className='card__bottom-actions'>
						<div>
							<div className='card__price'>
								<p className='card__price--old'>{formatNumber(old_price)} ₽</p>
								<p className='card__price--actual'>{formatNumber(price)} ₽</p>
							</div>
							<div className='card__buttons'>
								<Button
									children={
										isCartActive ? (
											<CartActive size={20} fill='#6F73EE' />
										) : (
											<Cart size={20} fill='#6F73EE' />
										)
									}
									onClick={() => {
										setCartIsActive(!isCartActive)
									}}
								/>
								<Button
									children={
										isHeartActive ? (
											<HeartActive size={20} fill='#6F73EE' />
										) : (
											<Heart size={20} fill='#6F73EE' />
										)
									}
									onClick={() => {
										setHeartIsActive(!isHeartActive)
									}}
								/>
							</div>
						</div>
						<Btn variant='solid' color='primary' className='w-full rounded-md'>
							Купить в 1 клик
						</Btn>
					</div>
				</div>
			</div>
		</Card>
	)
}
