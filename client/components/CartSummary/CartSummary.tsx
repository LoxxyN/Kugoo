import { splitNumber } from '@utils/index'
import { Button, Divider } from 'antd'
import './CartSummary.css'

interface ICartSummary {
	totalPrice: number
	discount: number
	priceWithOutDelivery: number
	priceWithOutDiscount: number
	onClick: () => void
	buttonText: string
}

export const CartSummary = ({
	totalPrice,
	discount,
	priceWithOutDelivery,
	priceWithOutDiscount,
	onClick,
	buttonText,
}: ICartSummary) => {
	return (
		<div className='cart-summary__wrapper'>
			<div className='cart-summary__amount'>
				<span>Итого</span>
				<h2>{splitNumber(totalPrice)}₽</h2>
			</div>
			<Divider />
			<div className='cart-summary__prices'>
				<div>
					<p>Стоимость товаров</p>
					<span>{splitNumber(priceWithOutDiscount)}₽</span>
				</div>
				<div>
					<p>Сумма скидки</p>
					<span>{splitNumber(discount)}₽</span>
				</div>
				<div>
					<p>Итого без учета доставки</p>
					<span>{splitNumber(priceWithOutDelivery)}₽</span>
				</div>
			</div>
			<Divider />
			<Button onClick={onClick} className='cart-summary__button' type='primary'>
				{buttonText}
			</Button>
		</div>
	)
}
