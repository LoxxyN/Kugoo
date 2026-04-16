import {
	OrderChangeCards,
	OrderChangePayments,
	OrderDeliveryAddressForm,
	OrderRecipientForm,
} from '@components/index'

export const OrderStepsLayout = () => {
	return (
		<div className='wrapper'>
			<div className='w-[760px]'>
				<div className='order-steps'>
					<OrderChangeCards />
					<OrderDeliveryAddressForm />
					<OrderRecipientForm />
					<OrderChangePayments />
				</div>
			</div>
		</div>
	)
}
