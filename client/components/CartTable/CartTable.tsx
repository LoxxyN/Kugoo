import { useCart, useClearCart } from '@hooks/index'
import { ICartItem } from '@interfaces/index'
import { Divider } from 'antd'
import { CartTableItem } from './CartTableItem/CartTableItem'

import './CartTable.css'

export const CartTable = () => {
	const { data: cartData } = useCart()
	const cartItems = cartData?.data?.data?.items
	const clearCart = useClearCart()

	const handleClearCart = () => {
		clearCart.mutate()
	}

	return (
		<div className='cart-layout__table'>
			<div className='cart-layout__table-header'>
				<span>Товар</span>
				<div>
					<span>Количество</span>
					<span>Сумма</span>
					<span tabIndex={0} onClick={handleClearCart}>
						Удалить все
					</span>
				</div>
			</div>
			{cartItems?.length > 0 ? (
				cartItems.map((product: ICartItem, index: number) => (
					<div key={product._id || index}>
						<CartTableItem product={product} />
						{/* Ставим разделитель после товара кроме последнего */}
						{index !== cartItems.length - 1 && <Divider />}
					</div>
				))
			) : (
				<h2 className='text-center'>Корзина пуста</h2>
			)}
		</div>
	)
}
