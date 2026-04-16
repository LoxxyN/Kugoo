import { OrderChangeCard } from '@components/index'
import { IOrderCardOptions, TPayments } from '@interfaces/index'
import { Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'

const paymentCardsOptions: IOrderCardOptions[] = [
	{
		value: 'card',
		title: 'Картой',
		body: (
			<ul>
				<li>Google pay</li>
				<li>Apple pay</li>
				<li>Visa</li>
				<li>Mir pay</li>
			</ul>
		),
	},
	{
		value: 'cash',
		title: 'Наличными',
		body: 'Курьеру, в магазине или при доставке CDEK',
	},
	{
		value: 'banking',
		title: 'Через интернет-банкинг по счету',
		body: 'Менеджер свяжется с вами, чтобы выставить счет',
	},
	{
		value: 'online',
		title: 'Онлайн на сайте',
		body: 'После оформления заказа вы будете перенаправлены на страницу оплаты',
	},
	{
		value: 'installment',
		title: 'В рассрочку',
		body: 'После оформления заказа c вами свяжется менеджер.',
	},
	{
		value: 'credit',
		title: 'В кредит от «Сбербанка»',
		body: 'С условиями можно ознакомиться на сайте банка',
	},
]

export const OrderChangePayments = () => {
	const [value, setValue] = useState<TPayments>('card')

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value)
	}

	return (
		<>
			<h3 className='py-8'>
				<span>Шаг {4}.</span>Выберите способ оплаты
			</h3>

			<Radio.Group value={value} onChange={onChange}>
				<div className='grid grid-cols-3 grid-rows-2 gap-5'>
					{paymentCardsOptions.map((item, i) => (
						<OrderChangeCard key={i} {...item} />
					))}
				</div>
			</Radio.Group>
		</>
	)
}
