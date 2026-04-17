import {
	CartSummary,
	OrderChangeCards,
	OrderChangePayments,
	OrderDeliveryAddressForm,
	OrderRecipientForm,
} from '@components/index'

import {
	useGetTotalDiscount,
	useGetTotalPrice,
	useGetTotalPriceWithoutDiscount,
} from '@hooks/index'
import { useNavigate } from 'react-router'

export const OrderStepsLayout = () => {
	const navigate = useNavigate()
	const totalPrice = useGetTotalPrice()
	const totalDiscount = useGetTotalDiscount() //Сумма скидки
	const totalWithoutDiscount = useGetTotalPriceWithoutDiscount() //Сумма без скидок

	const safeDiscount = Math.max(0, totalDiscount)
	const safeTotalWithoutDiscount = Math.max(totalPrice, totalWithoutDiscount)

	const navigateToSuccessOrderPage = () => {
		navigate(`/order/success`, {
			state: { fromOrder: true },
		})
	}

	return (
		<section>
			<div className='cart-layout wrapper relative'>
				<div className='w-3xl'>
					<div className='order-steps'>
						<OrderChangeCards />
						<OrderDeliveryAddressForm />
						<OrderRecipientForm />
						<OrderChangePayments />
					</div>
				</div>
				<CartSummary
					totalPrice={totalPrice}
					priceWithOutDiscount={safeTotalWithoutDiscount}
					discount={safeDiscount}
					priceWithOutDelivery={totalPrice}
					onClick={navigateToSuccessOrderPage}
					buttonText='Подтвердить заказ'
				/>
			</div>
		</section>
	)
}
