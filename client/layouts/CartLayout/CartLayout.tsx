import { CartLayoutEmpty, CartSummary, CartTable } from '@components/index'
import {
	useCart,
	useGetTotalDiscount,
	useGetTotalItems,
	useGetTotalPrice,
	useGetTotalPriceWithoutDiscount,
} from '@hooks/index'
import './CartLayout.css'

export const CartLayout = () => {
	const { data: cartData } = useCart()

	const cartItems = cartData?.data?.items?.length
	const totalItems = useGetTotalItems()
	const totalPrice = useGetTotalPrice()
	const totalDiscount = useGetTotalDiscount() //Сумма скидки
	const totalWithoutDiscount = useGetTotalPriceWithoutDiscount() //Сумма без скидок

	const safeDiscount = Math.max(0, totalDiscount)
	const safeTotalWithoutDiscount = Math.max(totalPrice, totalWithoutDiscount)

	return (
		<>
			{cartItems ? (
				<CartLayoutEmpty />
			) : (
				<>
					<p className='cart-layout__total-items'>
						{totalItems <= 0 ? '' : `${totalItems} товара`}
					</p>
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
