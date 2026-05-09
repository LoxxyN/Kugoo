import { CategoryCards } from '@components/index'
import { ICategoryCard } from '@interfaces/index'
import { Button } from 'antd'
import './CategoriesLayout.css'

const CATEGORY_CARDS_DATA: ICategoryCard[] = [
	{
		id: 1,
		title: 'Робот-пылесосы',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-1.webp',
	},
	{
		id: 2,
		title: 'Электровелосипеды',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-2.webp',
	},
	{
		id: 3,
		title: 'Весы',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-3.webp',
	},
	{
		id: 4,
		title: 'Робот-пылесосы',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-1.webp',
	},
	{
		id: 5,
		title: 'Электровелосипеды',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-2.webp',
	},
	{
		id: 6,
		title: 'Весы',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-3.webp',
	},
	{
		id: 7,
		title: 'Робот-пылесосы',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-1.webp',
	},
	{
		id: 8,
		title: 'Электровелосипеды',
		price: 29900,
		imageUrl: '/images/white-robot-vacuum-cleaner-2.webp',
	},
]

export const CategoriesLayout = () => {
	return (
		<section className='categories'>
			<div className='wrapper'>
				<div className='categories__heading'>
					<h2>Популярные категории</h2>
					<div className='small-tip'>
						<img src='/images/manager.svg' alt='Manager' />
						<div className='small-tip__description'>
							<p>
								Менеджер ответит на любой <br /> ваш вопрос о продуктах Kugoo
							</p>
							<a href='#'>Задать вопрос</a>
						</div>
					</div>
				</div>
				<CategoryCards category_cards={CATEGORY_CARDS_DATA} />
				<div>
					<Button className='button'>Смотреть все</Button>
				</div>
			</div>
		</section>
	)
}
