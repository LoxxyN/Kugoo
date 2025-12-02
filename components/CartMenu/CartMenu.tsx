import { CartMenuList } from '@components/index'
import { TrashIcon } from '@icons/index'
import { ICartMenuProps } from '@interfaces/index'
import { useCartStore } from '@store/index'
import { splitNumber } from '@utils/index'
import { Button, Drawer, Empty, Tooltip } from 'antd'
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
			footer={
				<div>
					Итого: <span>{splitNumber(totalPrice)} ₽</span>
				</div>
			}
			extra={
				items.length > 0 ? (
					<Tooltip placement='leftTop' arrow={false} title='Очистить корзину'>
						<Button
							onClick={() => clearCart()}
							type='text'
							shape='circle'
							className='cart-menu__delete-all'
						>
							<TrashIcon size={24} />
						</Button>
					</Tooltip>
				) : (
					''
				)
			}
		>
			{items.length > 0 ? (
				<CartMenuList CartItems={items} />
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_SIMPLE}
					description='Похоже тут пусто...'
				/>
			)}
		</Drawer>
	)
}
