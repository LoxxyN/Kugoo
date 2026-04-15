import { IBadge } from '@interfaces/index'
import clsx from 'clsx'

export const Badge = ({ type }: IBadge) => {
	return (
		<div
			className={clsx(
				'text-white text-xs pt-0.5 pb-0.5 w-fit px-2.5 rounded-md',
				{
					'bg-lime-500': type === 'new',
					'bg-green-500': type === 'free',
					'bg-red-500': type === 'hit',
					'bg-amber-500': type === 'premium',
				},
			)}
		>
			{type === 'hit' && 'ХИТ'}
			{type === 'new' && 'Новинка'}
			{type === 'premium' && 'Премиум'}
			{type === 'free' && 'Бесплатно'}
		</div>
	)
}
