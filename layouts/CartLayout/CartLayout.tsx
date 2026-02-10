import { CartLayoutEmpty, CartSummary, CartTable } from '@components/index'
import { useCartStore } from '@store/index'
import './CartLayout.css'

export const CartLayout = () => {
	const {
		items,
		getTotalItems,
		getTotalPrice,
		getTotalDiscount,
		getTotalPriceWithoutDiscount,
	} = useCartStore()

	const totalItems = getTotalItems()
	const totalPrice = getTotalPrice() //Сумма со скидками
	const totalDiscount = getTotalDiscount() //Сумма скидки
	const totalWithoutDiscount = getTotalPriceWithoutDiscount() //Сумма без скидок
	if (typeof totalDiscount === 'undefined' || typeof totalPrice === 'undefined')
		return

	// Проверка на корректность данных
	const safeDiscount = Math.max(0, totalDiscount)
	const safeTotalWithoutDiscount = Math.max(totalPrice, totalWithoutDiscount)

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
							priceWithOutDiscount={safeTotalWithoutDiscount}
							discount={safeDiscount}
							priceWithOutDelivery={totalPrice}
						/>
					</div>
				</>
			)}
		</>
	)
}
