import { InputCounter } from '@components/index'
import { useRemoveCartItem, useUpdateCartItem } from '@hooks/index'
import { CircleIcon, TrashIcon } from '@icons/index'
import { ICartItem } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import './CartTableItem.css'

export const CartTableItem: React.FC<{ product: ICartItem }> = ({
	product,
}) => {
	const navigate = useNavigate()
	const deleteItem = useRemoveCartItem()
	const updateItem = useUpdateCartItem()

	const quantity =
		typeof product.quantity !== 'undefined' ? product.quantity : 0

	const productQuantity =
		typeof product.quantity === 'number' ? product.quantity : 1

	const handleIncrementQuantity = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		updateItem.mutate({
			productId: product.productId,
			quantity: productQuantity + 1,
		})
	}

	const handleDecrementQuantity = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		updateItem.mutate({
			productId: product.productId,
			quantity: productQuantity - 1,
		})
	}

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		deleteItem.mutate(product.productId)
	}

	const navigateToCatalog = () => {
		navigate(`/catalog/${product.productId}`, {
			state: { fromCatalog: true },
		})
	}

	return (
		<div className='table-item' onClick={navigateToCatalog} tabIndex={0}>
			<div className='item-info'>
				<div className='img-wrapper'>
					<img src='/images/scooter.svg' alt='product img' />
				</div>
				<div className='item__description'>
					<h3 className='item__description-heading'>{product.name}</h3>
					<div className='item__description-instok'>
						<CircleIcon size={9} fill='#75D14A' />
						<span>В наличии</span>
					</div>
				</div>
			</div>

			<div className='item__actions'>
				<InputCounter
					handleIncrease={handleIncrementQuantity}
					handleDecrease={handleDecrementQuantity}
					value={quantity}
				/>

				<div className='item__price'>{splitNumber(product.price)}₽</div>

				<div className='item__delete'>
					<Button
						onClick={handleDelete}
						type='text'
						shape='circle'
						className='item__delete-button'
					>
						<TrashIcon size={24} />
					</Button>
				</div>
			</div>
		</div>
	)
}
