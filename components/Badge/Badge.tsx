import { TBadge } from '@interfaces/index'
import clsx from 'clsx'

export const Badge = ({ type }: TBadge) => {
	return (
		<div
			className={clsx('text-white text-xs py-0.5 px-2.5 rounded-md', {
				'bg-lime-500': type === 'new',
				'bg-red-500': type === 'hit',
				'bg-amber-500': type === 'premium',
			})}
		>
			{type === 'hit' && 'ХИТ'}
			{type === 'new' && 'НОВИНКА'}
			{type === 'premium' && 'ПРЕМИУМ'}
		</div>
	)
}
