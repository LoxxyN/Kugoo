import { ProductCardButton, ProductOptions } from '@components/index'
import {
	ArrowRightIcon,
	CircleIcon,
	DeliveryTruckIcon,
	HeartActiveIcon,
	HeartIcon,
	ScalesIcon,
	ShareIcon,
} from '@icons/index'
import { IProductOptions } from '@interfaces/index'
import { splitNumber } from '@utils/index'
import { Button, Divider, message, notification } from 'antd'
import { useState } from 'react'
import './ProductDescription.css'

export const ProductDescription = () => {
	const [isHeartActive, setHeartIsActive] = useState(false)
	const [options, setOptions] = useState<IProductOptions>({
		complectation: 'basic',
		warranty: 'basic',
		additional: 'none',
		packaging: 'none',
	})
	const [api, contextHolder] = notification.useNotification()
	const openNotification = () => {
		api.info({
			title: 'Товар добавлен в список избранного!',
			description: (
				<div className='flex gap-2 items-center'>
					<a href='#'>Перейти в избранное</a>
					<ArrowRightIcon size={12} fill='#6B7AFD' />
				</div>
			),
		})
	}

	const handleAddToFavorite = () => {
		setHeartIsActive(!isHeartActive)
		openNotification()
	}

	const handleCopyLink = () => {
		navigator.clipboard.writeText(document.location.href)
		message.info('Ссылка скопирована')
	}

	const handleOptionsChange = newOptions => {
		setOptions(prev => ({
			...prev,
			...newOptions,
		}))
	}

	return (
		<div className='product__description'>
			{contextHolder}
			<h2>kugoo kirin m4</h2>
			<div className='product__description-info'>
				<span>Просмотров 350</span>
				<span>Купили 196 раз</span>
				<span>Артикул: 2200000000026</span>
			</div>
			<div className='product__description-actions'>
				<div>
					<CircleIcon size={9} fill='#75D14A' />
					<span>В наличии</span>
				</div>
				<div>
					<ScalesIcon size={20} />
					<span>Сравнить</span>
				</div>
				<div onClick={handleCopyLink}>
					<ShareIcon />
					<span>Поделиться</span>
				</div>
			</div>
			<div className='product__description-pricing'>
				<div className='product__description-price'>
					<span>{splitNumber(39900)}₽</span>
					<p>{splitNumber(29900)}₽</p>
				</div>
				<div className='product__description-installment'>
					<img src='images/installment.png' alt='installment' />
					<div>
						<span>Рассрочка:</span>
						<p>{splitNumber(1760)}₽ в месяц / 24 месяца</p>
					</div>
				</div>
			</div>
			<ProductOptions
				initialOptions={options}
				onOptionsChange={handleOptionsChange}
			/>
			<div className='product__description-buy'>
				<div className='product__description-buy__heading'>
					<h3>{splitNumber(45900)} руб.</h3>
					<ProductCardButton
						children={
							isHeartActive ? (
								<HeartActiveIcon size={20} />
							) : (
								<HeartIcon size={20} />
							)
						}
						onClick={handleAddToFavorite}
					/>
				</div>
				<Divider />
				<div className='product__description-buy__delivery'>
					<DeliveryTruckIcon />
					<div>
						<p>Бесплатная доставка по РФ</p>
						<span>от 1 дня при заказе до 01.09</span>
					</div>
				</div>
				<div className='product__description-buy__buttons'>
					<Button type='primary'>Купить в 1 клик</Button>
					<Button>Добавить в корзину</Button>
				</div>
			</div>
		</div>
	)
}
