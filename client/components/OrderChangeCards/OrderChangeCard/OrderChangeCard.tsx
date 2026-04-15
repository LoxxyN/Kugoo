import { IOrderCardOptions } from '@interfaces/index'
import { cn } from '@utils/className'
import { Radio } from 'antd'
import './OrderChangeCard.css'

export const OrderChangeCard = ({
	value,
	title,
	body,
	footer,
}: IOrderCardOptions) => {
	return (
		<div className={cn('order-card')}>
			<div className='flex items-center'>
				<Radio value={value}>
					<h3 className='order-card__title'>{title}</h3>
				</Radio>
			</div>
			{body}
			{footer && <div>{footer}</div>}
		</div>
	)
}
