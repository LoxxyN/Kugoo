import { Badge, OrderChangeCard } from '@components/index'
import { IOrderCardOptions } from '@interfaces/index'
import { IOrderForm } from '@utils/index'
import { Radio, RadioChangeEvent, Select } from 'antd'
import { useFormContext } from 'react-hook-form'

const cities: Record<string, string>[] = [
	{ value: 'moscow', label: 'Москва' },
	{ value: 'krasnodar', label: 'Краснодар' },
	{ value: 'peterburg', label: 'Санкт-Петербург' },
]

const orderCardOptions: IOrderCardOptions[] = [
	{
		value: 'pickup',
		title: 'Самовывоз из магазина',
		body: <Select className='w-40' defaultValue={'moscow'} options={cities} />,
		footer: 'ул. Ткацкая, 5 стр. 16. Пн - Вс 10:00 - 20:00.',
	},
	{
		value: 'courier',
		title: 'Доставка курьером',
		body: (
			<ul>
				<li>Москва</li>
				<li>Санкт-Петербург</li>
				<li>Краснодар</li>
			</ul>
		),
		footer: <Badge type='free' />,
	},
	{
		value: 'cdek',
		title: 'Служба доставки CDEK',
		body: 'Регионы России',
		footer: 'Стоимость уточняйте у менеджера + 7 (800) 505 54 61',
	},
]

export const OrderChangeCards = () => {
	const {
		watch,
		resetField,
		setValue,
		formState: { errors },
	} = useFormContext<IOrderForm>()
	const deliveryMethod = watch('deliveryMethod')

	const onChange = (e: RadioChangeEvent) => {
		const newValue = e.target.value
		setValue('deliveryMethod', newValue)
		if (newValue === 'pickup') {
			resetField('city')
			resetField('street')
			resetField('houseNumber')
			resetField('houseCorps')
			resetField('appartmentNumber')
			resetField('cityIndex')
		}
	}

	return (
		<>
			<h3 className='py-8'>
				<span>Шаг {1}.</span>Выберите способ доставки
			</h3>

			<Radio.Group value={deliveryMethod} onChange={onChange}>
				<div className='grid grid-cols-3 grid-rows-1 gap-5'>
					{orderCardOptions.map((item, i) => (
						<OrderChangeCard key={i} {...item} />
					))}
				</div>
			</Radio.Group>
			{errors.deliveryMethod?.message && (
				<div className='text-red-500'>{errors.deliveryMethod?.message}</div>
			)}
		</>
	)
}
