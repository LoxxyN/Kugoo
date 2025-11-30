import { Trash } from '@icons/Trash'
import { ICartItem } from '@interfaces/ICartItem'
import { useCartStore } from '@store/useCartStore'
import { formatNumber } from '@utils/formatNumber'
import { Button } from 'antd'
import './CartCard.css'

export const CartCard: React.FC<{ product: ICartItem }> = ({ product }) => {
	const { deleteItem } = useCartStore()
	const quantity = product.quantity
	return (
		<div className='cart-card'>
			<div>
				<div className='cart-card__image'>
					<img src='../../public/images/Cart-item.svg' alt='Cart item' />
				</div>

				<div className='cart-card__description'>
					<h3 className='cart-card__name'>{product.name}</h3>
					<div>
						<span className='cart-card__price'>
							{formatNumber(product.price)} ₽
						</span>
						<span>{quantity} шт.</span>
					</div>
				</div>
			</div>

			<Button
				onClick={() => deleteItem(product.id)}
				className='cart-card__delete-item'
				shape='circle'
				type='text'
			>
				<Trash size={24} />
			</Button>
		</div>
	)
}
