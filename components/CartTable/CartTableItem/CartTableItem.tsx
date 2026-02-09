import { InputCounter } from '@components/index'
import { CircleIcon, TrashIcon } from '@icons/index'
import { ICartItem } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import './CartTableItem.css'

export const CartTableItem: React.FC<{
	product: ICartItem
	handleIncrement: (id: number | string) => void
	handleDecrement: (id: number | string) => void
	handleDeleteItem: (id: number | string) => void
}> = ({ product, handleDeleteItem, handleIncrement, handleDecrement }) => {
	const quantity =
		typeof product.quantity !== 'undefined' ? product.quantity : 0
	const navigate = useNavigate()

	//Функции для увеличения и уменьшения количества товаров
	const handleIncrease = (e: MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		handleIncrement(product.id)
	}

	const handleDecrease = (e: MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		handleDecrement(product.id)
	}

	const handleDelete = (e: MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		handleDeleteItem(product.id)
	}

	const handleClick = () => {
		navigate(`/catalog/${product.id}`, {
			state: { fromCatalog: true },
		})
	}

	return (
		<div className='table-item' onClick={handleClick} tabIndex={0}>
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
					handleIncrease={handleIncrease}
					handleDecrease={handleDecrease}
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
