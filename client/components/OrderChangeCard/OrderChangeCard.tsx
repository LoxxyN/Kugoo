import { IOrderCardOptions } from '@interfaces/index'
import { Radio } from 'antd'
import './OrderChangeCard.css'

export const OrderChangeCard = ({
	value,
	title,
	body,
	footer,
}: IOrderCardOptions) => {
	return (
		<div className='order-card'>
			<div className='flex items-center'>
				<Radio value={value}>
					<h3 className='order-card__title'>{title}</h3>
				</Radio>
			</div>
			<div className='order-card__body'>{body}</div>
			{footer && <div className='order-card__footer'>{footer}</div>}
		</div>
	)
}
