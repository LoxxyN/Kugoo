import { ServiceCard } from '@components/index'
import { ArrowRightIcon } from '@icons/index'
import { IServiceCard } from '@interfaces/index'

interface IServiceCards {
	itemsCards: IServiceCard[]
	listType: 'shop' | 'service'
}

export const ServiceCards = ({ itemsCards, listType }: IServiceCards) => {
	return (
		<div className='grid grid-cols-3 grid-rows-2 gap-7'>
			{itemsCards.map(item => (
				<ServiceCard
					key={item.id}
					id={item.id}
					icon={item.icon}
					title={item.title}
					description={item.description}
				/>
			))}
			<ServiceCard
				id={6}
				title={listType === 'shop' ? 'Больше в каталоге' : 'Больше в сервисе'}
				description={
					<a href='#' className='flex gap-2 items-center font-medium'>
						Перейти <ArrowRightIcon fill='#6f73ee' size={14} />
					</a>
				}
				cardHasImage={true}
				serviceCardImageType={listType === 'shop' ? 'shop' : 'service'}
			/>
		</div>
	)
}
