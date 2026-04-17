import { useRemoveCartItem, useUpdateCartItem } from '@hooks/index'
import { TrashIcon } from '@icons/index'
import { ICartItem } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button } from 'antd'
import './CartMenuItem.css'

export const CartMenuItem: React.FC<{ product: ICartItem }> = ({ product }) => {
	const removeItem = useRemoveCartItem()
	const updateItem = useUpdateCartItem()

	const productQuantity =
		typeof product.quantity === 'number' ? product.quantity : 1

	const handleIncrementQuantity = () => {
		updateItem.mutate({
			productId: product.productId,
			quantity: productQuantity + 1,
		})
	}

	const handleDecrementQuantity = () => {
		updateItem.mutate({
			productId: product.productId,
			quantity: productQuantity - 1,
		})
	}

	const handleRemoveProduct = () => {
		removeItem.mutate(product.productId)
	}

	return (
		<div className='cart-card'>
			<div>
				<div className='cart-card__image'>
					<img src='/images/cart-item.svg' alt='Cart item' />
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
					onClick={handleRemoveProduct}
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
