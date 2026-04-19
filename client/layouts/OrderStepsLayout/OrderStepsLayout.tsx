import {
	CartSummary,
	OrderChangeCards,
	OrderChangePayments,
	OrderDeliveryAddressForm,
	OrderRecipientForm,
} from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	useClearCart,
	useGetTotalDiscount,
	useGetTotalPrice,
	useGetTotalPriceWithoutDiscount,
} from '@hooks/index'
import { IOrderForm, orderFormSchema } from '@utils/index'
import { Form } from 'antd'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const OrderStepsLayout = () => {
	const navigate = useNavigate()

	const totalPrice = useGetTotalPrice()
	const totalDiscount = useGetTotalDiscount() //Сумма скидки
	const totalWithoutDiscount = useGetTotalPriceWithoutDiscount() //Сумма без скидок
	const safeDiscount = Math.max(0, totalDiscount)
	const safeTotalWithoutDiscount = Math.max(totalPrice, totalWithoutDiscount)

	const methods = useForm<IOrderForm>({
		resolver: zodResolver(orderFormSchema),
		defaultValues: {
			deliveryMethod: 'pickup',
			paymentMethods: 'card',
			name: '',
			surname: '',
			email: '',
			phoneNumber: '',
			comment: '',
		},
		mode: 'onChange',
	})

	const { watch, handleSubmit, reset } = methods
	const deliveryMethod = watch('deliveryMethod')
	const showAddress = deliveryMethod !== 'pickup'
	const clearCart = useClearCart()

	const onSubmit = (data: IOrderForm) => {
		reset()
		clearCart.mutate()

		try {
			navigate('/order/success', { state: { fromOrder: true } })
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<section>
			<FormProvider {...methods}>
				<Form>
					<div className='cart-layout wrapper relative'>
						<div className='w-3xl'>
							<div className='order-steps'>
								<OrderChangeCards />
								{showAddress && <OrderDeliveryAddressForm />}
								<OrderRecipientForm />
								<OrderChangePayments />
							</div>
						</div>
						<CartSummary
							totalPrice={totalPrice}
							priceWithOutDiscount={safeTotalWithoutDiscount}
							discount={safeDiscount}
							priceWithOutDelivery={totalPrice}
							onClick={handleSubmit(onSubmit)}
							buttonText='Подтвердить заказ'
						/>
					</div>
				</Form>
			</FormProvider>
		</section>
	)
}
