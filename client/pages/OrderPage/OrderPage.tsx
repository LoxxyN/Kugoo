import { useGetTotalItems } from '@hooks/useCart'
import { ArrowRightIcon } from '@icons/index'
import { OrderStepsLayout } from '@layouts/index'
import { useNavigate } from 'react-router'
import './OrderPage.css'

export const OrderPage = () => {
	const navigate = useNavigate()
	const totalItems = useGetTotalItems()

	return (
		<section className='mb-8'>
			<div className='wrapper pt-5'>
				<button onClick={() => navigate('/catalog')}>
					<div className='flex items-center gap-2'>
						<div className='rotate-180'>
							<ArrowRightIcon fill='#5d6c7b' />
						</div>
						<span className='text-[#5d6c7b] hover:text-[#6f73ee]'>
							Вернуться в каталог
						</span>
					</div>
				</button>

				<div className='order-page__heading'>
					<h2>Моя корзина</h2>
					<p>{totalItems} товара</p>
				</div>
			</div>
			<OrderStepsLayout />
		</section>
	)
}
