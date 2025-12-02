import { TrashIcon } from '@icons/index'
import { ICartItem } from '@interfaces/index'
import { useCartStore } from '@store/index'
import { splitNumber } from '@utils/index'
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
							{splitNumber(product.price)} ₽
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
				<TrashIcon size={24} />
			</Button>
		</div>
	)
}
