import { CartMenuList } from '@components/index'
import {
	useCart,
	useClearCart,
	useGetCartItems,
	useGetTotalPrice,
} from '@hooks/index'
import { TrashIcon } from '@icons/index'
import { splitNumber } from '@utils/index'
import { Button, Drawer, Empty, Tooltip } from 'antd'
import { Link } from 'react-router'
import './CartMenu.css'

interface ICartMenuProps {
	isOpen: boolean
	onClose: () => void
}

export const CartMenu = ({ isOpen, onClose }: ICartMenuProps) => {
	const { data: cartData } = useCart()
	const clearCart = useClearCart()
	const totalPrice = useGetTotalPrice()
	const cartItems = useGetCartItems(cartData)

	const handleClearCart = () => {
		clearCart.mutate()
	}

	return (
		<Drawer
			title='Ваша корзина'
			className='cart-menu'
			open={isOpen}
			onClose={onClose}
			footer={
				<div>
					<p>
						Итого: <span>{splitNumber(totalPrice)} ₽</span>
					</p>

					{cartItems?.length > 0 && (
						<Link to='/catalog/cart'>Перейти к оформлению</Link>
					)}
				</div>
			}
			extra={
				cartItems?.length > 0 ? (
					<Tooltip placement='leftTop' arrow={false} title='Очистить корзину'>
						<Button
							onClick={handleClearCart}
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
			{cartItems?.length > 0 ? (
				<CartMenuList CartItems={cartItems} />
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_SIMPLE}
					description='Похоже тут пусто...'
				/>
			)}
		</Drawer>
	)
}
