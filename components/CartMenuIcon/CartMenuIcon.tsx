import { CartActiveIcon, CartIcon } from '@icons/index'
import { useCartStore } from '@store/index'
import { Badge, Button } from 'antd'
import { useMemo } from 'react'

interface ButtonProp {
	onClick: () => void
}

export const CartMenuIcon = ({ onClick }: ButtonProp) => {
	const { getTotalItems } = useCartStore()
	const totalItems = useMemo(() => getTotalItems(), [getTotalItems])

	return (
		<Badge count={totalItems} showZero={false}>
			<Button
				className='text-sm font-medium'
				icon={
					totalItems <= 0 ? (
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
