import { useGetTotalItems } from '@hooks/index'
import { CartActiveIcon, CartIcon } from '@icons/index'
import { Badge, Button } from 'antd'

export const CartMenuIcon = ({ onClick }: { onClick: () => void }) => {
	const totalItems = useGetTotalItems()
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
