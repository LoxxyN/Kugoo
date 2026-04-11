import { useUserData } from '@hooks/index'
import { splitNumber } from '@utils/index'
import { Button, Divider, message } from 'antd'
import './CartSummary.css'

interface ICartSummary {
	totalPrice: number
	discount: number
	priceWithOutDelivery: number
	priceWithOutDiscount: number
}

export const CartSummary = ({
	totalPrice,
	discount,
	priceWithOutDelivery,
	priceWithOutDiscount,
}: ICartSummary) => {
	const { data: userData } = useUserData()
	const isLogin = !!userData

	const handleBuyInClick = () => {
		if (!isLogin) {
			return message.warning('Чтобы совершить покупку вам необходимо войти')
		}
	}

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
			<div>
				<Button
					onClick={handleBuyInClick}
					className='cart-summary__button'
					type='primary'
				>
					Оформить заказ
				</Button>
			</div>
		</div>
	)
}
