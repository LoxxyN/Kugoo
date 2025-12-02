import { CartActiveIcon, CartIcon } from '@icons/index'
import { useCartStore } from '@store/index'
import { Badge, Button } from 'antd'

interface ButtonProp {
	onClick: () => void
}

export const CartMenuIcon = ({ onClick }: ButtonProp) => {
	const { getTotalItems } = useCartStore()

	return (
		<Badge count={getTotalItems()} showZero={false}>
			<Button
				style={{
					fontWeight: '500',
					fontSize: '14px',
				}}
				icon={
					getTotalItems() <= 0 ? (
						<CartIcon size={20} />
					) : (
						<CartActiveIcon size={20} />
					)
				}
				type='text'
				shape='round'
				onClick={onClick}
			>
				Корзина
			</Button>
		</Badge>
	)
}
