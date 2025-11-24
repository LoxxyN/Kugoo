import { Trash } from '@icons/Trash'
import { ICartItem } from '@interfaces/ICartItem'
import { formatNumber } from '@utils/formatNumber'
import './CartCard.css'

export const CartCard = ({ name, price, quantity }: Omit<ICartItem, 'id'>) => {
	return (
		<div className='cart-card'>
			<div>
				<div className='cart-card__image'>
					<img src='../../public/images/Cart-item.svg' alt='Cart item' />
				</div>

				<div className='cart-card__description'>
					<h3 className='cart-card__name'>{name}</h3>
					<div>
						<span className='cart-card__price'>{formatNumber(price)} ₽</span>
						<span>{quantity} шт.</span>
					</div>
				</div>
			</div>

			<button className='cart-card__delete-item'>
				<Trash size={22} />
			</button>
		</div>
	)
}
