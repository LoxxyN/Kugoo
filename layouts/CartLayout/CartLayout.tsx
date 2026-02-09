import { CartLayoutEmpty, CartSummary, CartTable } from '@components/index'
import { useCartStore } from '@store/index'
import './CartLayout.css'

export const CartLayout = () => {
	const { items, getTotalItems, getTotalPrice, getTotalDiscount } =
		useCartStore()

	const totalItems = getTotalItems()
	const totalPrice = getTotalPrice()
	const totalDiscount = getTotalDiscount()

	if (typeof totalDiscount === 'undefined' || typeof totalPrice === 'undefined')
		return

	const discount =
		totalDiscount - totalPrice <= 0 ? 0 : totalDiscount - totalPrice

	return (
		<>
			{items.length === 0 ? (
				<CartLayoutEmpty />
			) : (
				<>
					<p className='cart-layout__total-items'>{totalItems} товара</p>
					<div className='cart-layout'>
						<CartTable />
						<CartSummary
							totalPrice={totalPrice}
							discount={discount}
							priceWithOutDiscount={totalDiscount}
							priceWithOutDelivery={totalPrice}
						/>
					</div>
				</>
			)}
		</>
	)
}
