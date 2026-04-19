import { ArrowRightIcon } from '@icons/index'
import { message, notification } from 'antd'
import { useMemo } from 'react'

const cartMessages = {
	add: () => message.info('Добавлено в корзину'),
	delete: () => message.info('Удалено из корзины'),
}

const favoriteMessages = {
	add: () =>
		notification.info({
			title: 'Товар добавлен в список избранного',
			description: (
				<div className='flex gap-2 items-center'>
					<a href='#'>Перейти в избранное</a>
					<ArrowRightIcon size={12} fill='#6B7AFD' />
				</div>
			),
		}),
	delete: () => notification.info({ title: 'Товар удален из избранного' }),
}

const modalMessages = {
	finishSuccess: () => message.success('Заявка в обработке, ожидайте ответа.'),
	finishFailed: () =>
		message.error('Неверно введены данные, повторите попытку.'),
	successRegistration: () => message.success('Вы успешно зарегистрировались!'),
	errorRegistration: () => message.error('Произошла ошибка при регистрации'),
}

const mailingMessages = {
	mailingFailed: () => message.error('Неверно указана почта'),
	mailingComplete: () =>
		message.success('Вы успешно подписались на рассылку новостей'),
}

export const useNotifications = () =>
	useMemo(() => {
		return {
			cartMessages,
			favoriteMessages,
			modalMessages,
			mailingMessages,
		}
	}, [])
