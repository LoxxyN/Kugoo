import { CartCard } from '@components/CartCard/CartCard'
import { Trash } from '@icons/Trash'
import { ICartMenuProps } from '@interfaces/ICartMenuProps'
import { useCartStore } from '@store/useCartStore'
import { formatNumber } from '@utils/formatNumber'
import { Button, Drawer } from 'antd'
import './CartMenu.css'

export const CartMenu = ({ isOpen, onClose }: ICartMenuProps) => {
	const { items, clearCart, getTotalPrice } = useCartStore()
	const totalPrice = getTotalPrice()
	return (
		<Drawer
			title='Ваша корзина'
			className='cart-menu'
			open={isOpen}
			onClose={onClose}
			mask={false}
			footer={
				<div>
					Итого: <span>{formatNumber(totalPrice)} ₽</span>
				</div>
			}
			extra={
				<Button
					onClick={() => clearCart()}
					type='text'
					shape='circle'
					className='cart-menu__delete-all'
				>
					<Trash size={24} />
				</Button>
			}
		>
			{items.map(item => (
				<CartCard product={item} key={item.id} />
			))}
		</Drawer>
	)
}
