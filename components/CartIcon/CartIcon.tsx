import { Cart, CartActive } from '@icons/index'
import { useCartStore } from '@store/index'
import { Badge, Button } from 'antd'

interface ButtonProp {
	onClick: () => void
}

export const CartIcon = ({ onClick }: ButtonProp) => {
	const { getTotalItems } = useCartStore()

	return (
		<Badge count={getTotalItems()} showZero={false}>
			<Button
				icon={
					getTotalItems() <= 0 ? <Cart size={20} /> : <CartActive size={20} />
				}
				type='text'
				shape='circle'
				onClick={onClick}
			/>
		</Badge>
	)
}
