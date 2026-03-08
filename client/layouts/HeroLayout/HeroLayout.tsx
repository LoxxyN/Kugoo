import { FeedBackIcon } from '@icons/FeedbackIcon'
import { StarIcon } from '@icons/StarIcon'
import { Carousel } from 'antd'
import { CarouselContent } from './CarouselContent'
import './HeroLayout.css'

export const HeroLayout = () => {
	return (
		<section className='hero'>
			<Carousel
				className='hero__carousel'
				arrows={true}
				autoplay={{ dotDuration: true }}
				autoplaySpeed={7000}
			>
				<div className='hero__content-wrapper'>
					<CarouselContent />
				</div>
				<div className='hero__content-wrapper'>
					<CarouselContent />
				</div>
				<div className='hero__content-wrapper'>
					<CarouselContent />
				</div>
				<div className='hero__content-wrapper'>
					<CarouselContent />
				</div>
				<div className='hero__content-wrapper'>
					<CarouselContent />
				</div>
			</Carousel>
			<div className='hero__bonuses'>
				<div className='hero__bonus'>
					<h3>Гарантия 1 год</h3>
					<p>на весь асортимент</p>
				</div>
				<div className='hero__bonus'>
					<h3>Рассрочка</h3>
					<p>от 6 месяцев</p>
				</div>
				<div className='hero__bonus'>
					<h3>Подарки</h3>
					<p>и бонусы к покупкам</p>
				</div>
				<div className='hero__feedback'>
					<div className='hero__feedback-rectangle'>
						<FeedBackIcon />
					</div>
					<div className='hero__feedback-rate'>
						<p>Яндекс отзывы</p>
						<div className='hero__feedback-rating'>
							<StarIcon />
							<span>4,9</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
