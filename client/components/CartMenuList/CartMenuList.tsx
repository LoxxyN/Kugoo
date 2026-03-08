import { CartMenuItem } from '@components/index'
import { ICartItem } from '@interfaces/ICartItem'

export const CartMenuList: React.FC<{ CartItems: ICartItem[] }> = ({
	CartItems,
}) => {
	return (
		<div>
			{CartItems.map(item => (
				<CartMenuItem product={item} key={item._id} />
			))}
		</div>
	)
}
