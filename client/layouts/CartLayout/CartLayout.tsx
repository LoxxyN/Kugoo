import { CartLayoutEmpty, CartSummary, CartTable } from '@components/index'
import {
	useCart,
	useGetCartItems,
	useGetTotalDiscount,
	useGetTotalItems,
	useGetTotalPrice,
	useGetTotalPriceWithoutDiscount,
	useUserData,
} from '@hooks/index'
import { message } from 'antd'
import { useNavigate } from 'react-router'
import './CartLayout.css'

export const CartLayout = () => {
	const { data: cartData } = useCart()
	const { data: userData } = useUserData()
	const navigate = useNavigate()
	const isLogin = !!userData

	const cartItems = useGetCartItems(cartData)
	const totalItems = useGetTotalItems()
	const totalPrice = useGetTotalPrice()
	const totalDiscount = useGetTotalDiscount() //Сумма скидки
	const totalWithoutDiscount = useGetTotalPriceWithoutDiscount() //Сумма без скидок
	const isCartEmpty = cartItems.length === 0 ? true : false

	const safeDiscount = Math.max(0, totalDiscount)
	const safeTotalWithoutDiscount = Math.max(totalPrice, totalWithoutDiscount)

	//Проверяет залогинен ли пользователь и возвращает уведомление в отрицательном случае
	const notifyIfNotLogin = () => {
		if (!isLogin) {
			return message.warning('Чтобы совершить покупку вам необходимо войти')
		}
	}

	const navigateToOrderPage = () => {
		//Logic of buy in one click
		if (!isLogin) return notifyIfNotLogin()

		navigate(`/order`, {
			state: { fromCart: true },
		})
	}

	return (
		<>
			{isCartEmpty ? (
				<CartLayoutEmpty />
			) : (
				<>
					<p className='cart-layout__total-items'>
						{totalItems <= 0 ? '' : `${totalItems} товаров`}
					</p>
					<div className='cart-layout'>
						<CartTable />
						<CartSummary
							totalPrice={totalPrice}
							priceWithOutDiscount={safeTotalWithoutDiscount}
							discount={safeDiscount}
							priceWithOutDelivery={totalPrice}
							onClick={navigateToOrderPage}
							buttonText='Оформить заказ'
							disabled={isCartEmpty}
						/>
					</div>
				</>
			)}
		</>
	)
}
