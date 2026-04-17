import { CartLayout } from '@layouts/index'

export const CartPage = () => {
	return (
		<section>
			<div className='wrapper pt-11'>
				<h2>Моя корзина</h2>
				<CartLayout />
			</div>
		</section>
	)
}
