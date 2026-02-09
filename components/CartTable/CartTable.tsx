import { useCartStore } from '@store/useCartStore'
import { Divider } from 'antd'
import { CartTableItem } from './CartTableItem/CartTableItem'

import './CartTable.css'

export const CartTable = () => {
	const { items, deleteItem, clearCart, incrementQuantity, decrementQuantity } =
		useCartStore()
	return (
		<div className='cart-layout__table'>
			<div className='cart-layout__table-header'>
				<span>Товар</span>
				<div>
					<span>Количество</span>
					<span>Сумма</span>
					<span tabIndex={0} onClick={() => clearCart()}>
						Удалить все
					</span>
				</div>
			</div>
			{items.map((product, index) => (
				<div key={product.id}>
					<CartTableItem
						product={product}
						handleDeleteItem={deleteItem}
						handleDecrement={decrementQuantity}
						handleIncrement={incrementQuantity}
					/>
					{/* Ставим разделитель после товара кроме последнего */}
					{index !== items.length - 1 && <Divider />}
				</div>
			))}
		</div>
	)
}
