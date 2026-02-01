import { IServiceCard } from '@interfaces/index'
import './ServiceCard.css'

export const ServiceCard = ({
	icon,
	title,
	description,
	cardHasImage,
	serviceCardImageType,
}: IServiceCard) => {
	return (
		<div className='service-card'>
			<div>
				<div className='service-card__icon'>{icon}</div>
				<h3 className='service-card__title'>{title}</h3>
				<p className='service-card__description'>{description}</p>
			</div>
			{cardHasImage && (
				<img
					src={`/images/${
						serviceCardImageType === 'shop' //В зависимости от типа выбирается картинка
							? 'scooter-little-image.svg'
							: 'drill-image.svg'
					}`}
					alt={serviceCardImageType === 'shop' ? 'scooter-little' : 'drill'}
				/>
			)}
		</div>
	)
}
