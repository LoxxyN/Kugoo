import { CartCard } from '@components/index'
import { ICartItem } from '@interfaces/ICartItem'

export const CartMenuList: React.FC<{ CartItems: ICartItem[] }> = ({
	CartItems,
}) => {
	return (
		<div>
			{CartItems.map(item => (
				<CartCard product={item} key={item.id} />
			))}
		</div>
	)
}
