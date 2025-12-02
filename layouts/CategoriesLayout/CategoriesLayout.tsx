import { CategoryCards } from '@components/index'
import { Button } from 'antd'
import './CategoriesLayout.css'

export const CategoriesLayout = () => {
	return (
		<section className='categories'>
			<div className='wrapper'>
				<div className='categories__heading'>
					<h2>Популярные категории</h2>
					<div className='small-tip'>
						<img src='../../public/images/Manager.svg' alt='Manager' />
						<div className='small-tip__description'>
							<p>
								Менеджер ответит на любой <br /> ваш вопрос о продуктах Kugoo
							</p>
							<a href='#'>Задать вопрос</a>
						</div>
					</div>
				</div>
				<CategoryCards />
				<div>
					<Button className='button'>Смотреть все</Button>
				</div>
			</div>
		</section>
	)
}
