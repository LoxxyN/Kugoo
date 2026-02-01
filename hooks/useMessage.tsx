import { message } from 'antd'

export const useMessage = () => {
	const cartMessages = {
		add: () => message.info('Добавлено в корзину'),
		delete: () => message.info('Удалено из корзины'),
	}

	const favoriteMessages = {
		add: () => message.info('Добавлено в избранное'),
		delete: () => message.info('Удалено из избранного'),
	}

	return {
		cartMessages,
		favoriteMessages,
	}
}
