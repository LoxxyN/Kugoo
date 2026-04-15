import { ArrowRightIcon } from '@icons/index'
import { useNavigate } from 'react-router'
import './OrderSuccessPage.css'

export const OrderSuccessPage = () => {
	const navigate = useNavigate()

	return (
		<section>
			<div className='wrapper py-5'>
				<button onClick={() => navigate('/catalog')}>
					<div className='flex items-center gap-2'>
						<div className='rotate-180'>
							<ArrowRightIcon fill='#5d6c7b' />
						</div>
						<span className='text-[#5d6c7b] hover:text-[#6f73ee]'>
							Вернуться в каталог
						</span>
					</div>
				</button>
			</div>

			<div className='content__background'>
				<div className='wrapper'>
					<div className='wrapper__content'>
						<div className='content__left'>
							<h2>Мы получили вашу заявку</h2>
							<div className='content__left-description'>
								<p>
									Менеджер свяжется с Вами в течение 5 минут в рабочее время.
									Если Вы оставили заявку в нерабочее время — начнем следующий
									день со звонка Вам.
								</p>
								<p>
									А пока ожидаете — присоединяйтесь к сообществу Kugoo в
									Instagram.
								</p>
							</div>

							<button className='content__left-to_instagram_button'>
								Перейти в instagram
							</button>
						</div>
						<div className='content__right'>
							<img src='/images/iphone-instagram.svg' alt='kugoo instagram' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
