import { Button, Empty } from 'antd'
import './CartLayoutEmpty.css'

export const CartLayoutEmpty = () => {
	return (
		<div className='empty-cart__wrapper'>
			<Empty
				image={Empty.PRESENTED_IMAGE_SIMPLE}
				description={
					<div>
						<h3>Ваша корзина пуста</h3>
						<p>Добавьте в нее товары из каталога</p>
					</div>
				}
			>
				<Button
					type='primary'
					onClick={() => (window.location.href = '/catalog')}
				>
					Перейти в каталог
				</Button>
			</Empty>
		</div>
	)
}
