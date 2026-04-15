import { Badge } from '@components/index'
import { IOrderCardOptions } from '@interfaces/index'
import { Radio, RadioChangeEvent, Select } from 'antd'
import { useState } from 'react'
import { OrderChangeCard } from './OrderChangeCard/OrderChangeCard'

const cities: Record<string, string>[] = [
	{ value: 'moscow', label: 'Москва' },
	{ value: 'krasnodar', label: 'Краснодар' },
	{ value: 'peterburg', label: 'Санкт-Петербург' },
]

const orderCardOptions: IOrderCardOptions[] = [
	{
		value: 'pickup',
		title: 'Самовывоз из магазина',
		body: (
			<div className='order-card__body'>
				<Select className='w-40' defaultValue={'moscow'} options={cities} />
			</div>
		),
		footer: (
			<p className='order-card__footer'>
				ул. Ткацкая, 5 стр. 16. Пн - Вс 10:00 - 20:00.
			</p>
		),
	},
	{
		value: 'courier',
		title: 'Доставка курьером',
		body: (
			<div className='order-card__body'>
				<ul>
					<li>Москва</li>
					<li>Санкт-Петербург</li>
					<li>Краснодар</li>
				</ul>
			</div>
		),
		footer: <Badge type='free' />,
	},
	{
		value: 'cdek',
		title: 'Служба доставки CDEK',
		body: <p className='order-card__body'>Регионы России</p>,
		footer: (
			<p className='order-card__footer'>
				Стоимость уточняйте у менеджера + 7 (800) 505 54 61
			</p>
		),
	},
]

export const OrderChangeCards = () => {
	const [value, setValue] = useState('pickup')

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value)
	}

	return (
		<>
			<h3 className='py-8'>
				<span>Шаг {1}.</span>Выберите способ доставки
			</h3>

			<Radio.Group value={value} onChange={onChange}>
				<div className='flex justify-between gap-5'>
					{orderCardOptions.map((item, i) => (
						<OrderChangeCard
							key={i}
							footer={item.footer}
							body={item.body}
							title={item.title}
							value={item.value}
						/>
					))}
				</div>
			</Radio.Group>
		</>
	)
}
