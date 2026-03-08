import { TrashIcon } from '@icons/index'
import { ICartItem } from '@interfaces/index'
import { useCartStore } from '@store/index'
import { splitNumber } from '@utils/index'
import { Button } from 'antd'
import './CartMenuItem.css'

export const CartMenuItem: React.FC<{ product: ICartItem }> = ({ product }) => {
	const { deleteItem, incrementQuantity, decrementQuantity } = useCartStore()

	const handleIncrementQuantity = () => {
		incrementQuantity(product._id)
	}

	const handleDecrementQuantity = () => {
		decrementQuantity(product._id)
	}

	const deleteProduct = () => {
		deleteItem(product._id)
	}

	return (
		<div className='cart-card'>
			<div>
				<div className='cart-card__image'>
					<img src='/images/Cart-item.svg' alt='Cart item' />
				</div>

				<div className='cart-card__description'>
					<h3 className='cart-card__name'>{product.name}</h3>
					<div>
						<span className='cart-card__price'>
							{splitNumber(product.price)} ₽
						</span>
						<span>{product.quantity} шт.</span>
					</div>
				</div>
			</div>

			<div>
				<div className='cart-card__buttons'>
					<Button
						className='cart-card__buttons-decrement'
						onClick={handleDecrementQuantity}
					>
						-
					</Button>
					<Button
						className='cart-card__buttons-increment'
						onClick={handleIncrementQuantity}
					>
						+
					</Button>
				</div>

				<Button
					onClick={deleteProduct}
					className='cart-card__delete-item'
					shape='circle'
					type='text'
				>
					<TrashIcon size={24} />
				</Button>
			</div>
		</div>
	)
}
