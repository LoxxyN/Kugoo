import { FooterCallTell, FooterMailingForm } from '@components/index'
import './FooterLayout.css'

export const FooterLayout = () => {
	const paymentList = [
		{ src: '/images/google-pay.svg', alt: 'google-pay' },
		{ src: '/images/apple-pay.svg', alt: 'apple-pay' },
		{ src: '/images/visa-pay.svg', alt: 'visa-pay' },
		{ src: '/images/maestro-pay.svg', alt: 'maestro-pay' },
		{ src: '/images/mastercard-pay.svg', alt: 'mastercard-pay' },
		{ src: '/images/webmoney-pay.svg', alt: 'webmoney-pay' },
		{ src: '/images/qiwi-pay.svg', alt: 'qiwi-pay' },
	]

	const socialList = [
		{ name: 'Vkontakte', count: '3 300' },
		{ name: 'Instagram', count: '10 602' },
		{ name: 'Youtube', count: '3 603' },
		{ name: 'Telegram', count: '432' },
	]

	return (
		<footer>
			<div className='mailing'>
				<div className='wrapper'>
					<h2>
						Оставьте свою почту и станьте первым, <br />
						кто получит скидку на новые самокаты
					</h2>

					<FooterMailingForm />
				</div>
			</div>

			<div className='wrapper'>
				<div className='footer__info'>
					<div className='foooter__buyers-lists'>
						<div className='foooter__buyers-list'>
							<h3>Каталог товаров</h3>
							<ul>
								<li>Электросамокаты</li>
								<li>Электроскутеры</li>
								<li>Электровелосипеды</li>
								<li>Электровелосипеды</li>
							</ul>
						</div>
						<div className='foooter__buyers-list'>
							<h3>Покупателям</h3>
							<div>
								<ul>
									<li>Сервисный центр</li>
									<li>Доставка и оплата</li>
									<li>Рассрочка</li>
									<li>Тест-драйв</li>
								</ul>
								<ul>
									<li>Блог</li>
									<li>Сотрудничество</li>
									<li>Контакты</li>
									<li>Акции</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='foooter__contacts'>
						<div className='foooter__contacts-heading'>
							<h3>Контакты</h3>
							<FooterCallTell />
						</div>
						<div className='foooter__contacts-content'>
							<div className='foooter__contacts-content__top'>
								<div className='foooter__contacts-card'>
									<p>Call-центр</p>
									<p>+7 (800) 505-54-61</p>
									<span>Пн-Вс 10:00 - 20:00</span>
								</div>
								<div className='foooter__contacts-card'>
									<p>Сервисный-центр</p>
									<p>+7 (499) 350-76-92</p>
									<span>Пн-Вс 10:00 - 20:00</span>
								</div>
							</div>

							<div className='foooter__contacts-content__bottom'>
								<div className='foooter__contacts-card'>
									<p>Магазин в Москве ул. Ткацкая, 5 стр. 16</p>
									<span>+7 (499) 406 15 87</span>
								</div>
								<div className='foooter__contacts-card'>
									<p>Магазин в Санкт-Петербурге ул. Фрунзе, 2</p>
									<span>+7 (499) 350-76-92</span>
								</div>
								<div className='foooter__contacts-card'>
									<p>Магазин в Краснодаре ул. Восточно-Кругликовская, 86</p>
									<span>+ 7 (800) 505 54 61</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className='footer__socials'>
					<div className='footer__logo'>
						<img src='/images/Logo.svg' alt='footer logo' />
					</div>
					<div className='footer__dowloads'>
						<a href='#'>
							<img src='/images/google-play.svg' alt='google-play' />
						</a>
						<a href='#'>
							<img src='/images/app-store.svg' alt='app-store' />
						</a>
					</div>
					<div className='footer__socials-list'>
						{socialList.map((item, i) => (
							<div key={i} className='footer__socials-list-item'>
								<img src={`/images/${item.name}-logo.svg`} alt={item.name} />
								<div>
									<p>{item.name}</p>
									<span>{item.count}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<hr />
				<div className='footer__payments'>
					<div className='footer__payments-politics'>
						<a href='#'>Реквизиты</a>
						<a href='#'>Политика конфиденциальности</a>
					</div>

					<div className='footer__payments-and-chats'>
						<div className='footer__socials-wallets'>
							{paymentList.map((item, i) => (
								<div key={i}>
									<img src={item.src} alt={item.alt} />
								</div>
							))}
						</div>

						<div className='footer__socials-chats'>
							Online чат:
							<div>
								<img src='/images/viber-chat.svg' alt='viber-chat' />
								<img src='/images/whatsapp-chat.svg' alt='whatsapp-chat' />
								<img src='/images/telegram-chat.svg' alt='telegram-chat' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
