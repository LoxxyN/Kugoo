import { OrderChangeCards, OrderDeliveryAddress } from '@components/index'

export const OrderStepsLayout = () => {
	return (
		<div className='wrapper'>
			<div className='w-[760px]'>
				<div className='order-steps'>
					<OrderChangeCards />

					<OrderDeliveryAddress />
				</div>
			</div>
		</div>
	)
}
