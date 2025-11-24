import { CartCard } from '@components/index'
import { Cart, CartActive } from '@icons/index'
import { useCartStore } from '@store/index'
import { Dropdown } from 'antd'

export const CartMenu = () => {
	const {
		items,
		addItem,
		deleteItem,
		updateQuantity,
		clearCart,
		getTotalPrice,
		getTotalItems,
	} = useCartStore()

	const handleQuantityChange = (id: string | number, value: number | null) => {
		if (value !== null) {
			updateQuantity(id, value)
		}
	}

	const incrementQuantity = (id: string | number, currentQuantity: number) => {
		updateQuantity(id, currentQuantity + 1)
	}

	const decrementQuantity = (id: string | number, currentQuantity: number) => {
		if (currentQuantity > 1) {
			updateQuantity(id, currentQuantity - 1)
		} else {
			deleteItem(id)
		}
	}

	const items = [
		{
			key: '1',
			label: <CartCard name='Kugoo' price={29990} quantity={1} />,
		},
		{
			key: '2',
			label: <CartCard name='Kugoo M2' price={19990} quantity={2} />,
		},
	]

	return (
		<Dropdown menu={{ items }} trigger={['click']}>
			<div>
				<button className='cart__icon'>
					{items.length === 0 ? (
						<Cart fill='#6F73EE' />
					) : (
						<CartActive fill='#6F73EE' />
					)}
				</button>
				Корзина
			</div>
		</Dropdown>
	)
}
