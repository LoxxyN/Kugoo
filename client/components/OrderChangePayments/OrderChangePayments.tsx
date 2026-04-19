import { OrderChangeCard } from '@components/index'
import { IOrderCardOptions } from '@interfaces/index'
import { IOrderForm } from '@utils/schemas'
import { Radio, RadioChangeEvent } from 'antd'
import { useFormContext } from 'react-hook-form'

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
	const {
		watch,
		setValue,
		formState: { errors },
	} = useFormContext<IOrderForm>()
	const paymentMethod = watch('paymentMethods')

	const onChange = (e: RadioChangeEvent) => {
		setValue('paymentMethods', e.target.value)
	}

	return (
		<>
			<h3 className='py-8'>
				<span>Шаг {4}.</span>Выберите способ оплаты
			</h3>

			<Radio.Group value={paymentMethod} onChange={onChange}>
				<div className='grid grid-cols-3 grid-rows-2 gap-5'>
					{paymentCardsOptions.map((item, i) => (
						<OrderChangeCard key={i} {...item} />
					))}
				</div>
			</Radio.Group>
			{errors.paymentMethods?.message && (
				<div className='text-red-500'>{errors.paymentMethods?.message}</div>
			)}
		</>
	)
}
