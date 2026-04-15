import { zodResolver } from '@hookform/resolvers/zod'
import { deliverySchema } from '@utils/index'
import { Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import './OrderDeliveryAddress.css'

const deliveryFormSchema = deliverySchema
type TDeliveryFormInput = z.input<typeof deliverySchema>
type TDeliveryFormOutput = z.infer<typeof deliverySchema>

export const OrderDeliveryAddress = () => {
	const {
		control,
		formState: { errors },
	} = useForm<TDeliveryFormInput, unknown, TDeliveryFormOutput>({
		resolver: zodResolver(deliveryFormSchema),
		defaultValues: {
			city: '',
			street: '',
			houseNumber: '',
			houseCorps: '',
			appartmentNumber: '',
			cityIndex: '',
		},
		mode: 'onChange',
	})

	return (
		<Form>
			<h3 className='py-8'>
				<span>Шаг 2.</span>Укажите адрес доставки
			</h3>
			<div className='delivery-inputs-grid'>
				<Controller
					name='city'
					control={control}
					render={({ field }) => (
						<div className='delivery-input--big input-area--big__1'>
							<Form.Item
								label='Город/населенный пункт*'
								layout='vertical'
								validateStatus={errors.city ? 'error' : ''}
								help={errors.city?.message}
							>
								<Input
									{...field}
									className='delivery-input'
									placeholder='Например, Воронеж'
								/>
							</Form.Item>
						</div>
					)}
				/>
				<Controller
					control={control}
					name='street'
					render={({ field }) => (
						<div className='delivery-input--big input-area--big__2'>
							<Form.Item
								label='Название улицы*'
								layout='vertical'
								validateStatus={errors.street ? 'error' : ''}
								help={errors.street?.message}
							>
								<Input
									{...field}
									className='delivery-input'
									placeholder='Например, Сурганова'
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='houseNumber'
					render={({ field }) => (
						<div className='delivery-input--small input-area--small__1'>
							<Form.Item
								label='Номер дома*'
								layout='vertical'
								validateStatus={errors.houseNumber ? 'error' : ''}
								help={errors.houseNumber?.message}
							>
								<Input
									{...field}
									value={
										typeof field.value === 'string' ||
										typeof field.value === 'number'
											? field.value
											: ''
									}
									className='delivery-input'
									placeholder='Введите число'
								/>
							</Form.Item>
						</div>
					)}
				></Controller>

				<Controller
					control={control}
					name='houseCorps'
					render={({ field }) => (
						<div className='delivery-input--small input-area--small__2'>
							<Form.Item
								label='Корпус'
								layout='vertical'
								validateStatus={errors.houseCorps ? 'error' : ''}
								help={errors.houseCorps?.message}
							>
								<Input
									{...field}
									value={
										typeof field.value === 'string' ||
										typeof field.value === 'number'
											? field.value
											: ''
									}
									className='delivery-input'
									placeholder='Введите число'
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='appartmentNumber'
					render={({ field }) => (
						<div className='delivery-input--small input-area--small__3'>
							<Form.Item
								label='Квартира'
								layout='vertical'
								validateStatus={errors.appartmentNumber ? 'error' : ''}
								help={errors.appartmentNumber?.message}
							>
								<Input
									{...field}
									value={
										typeof field.value === 'string' ||
										typeof field.value === 'number'
											? field.value
											: ''
									}
									className='delivery-input'
									placeholder='Введите число'
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='cityIndex'
					render={({ field }) => (
						<div className='delivery-input--small input-area--small__4'>
							<Form.Item
								label='Индекс'
								layout='vertical'
								validateStatus={errors.cityIndex ? 'error' : ''}
								help={errors.cityIndex?.message}
							>
								<Input.OTP
									{...field}
									inputMode='numeric'
									value={typeof field.value === 'string' ? field.value : ''}
									formatter={value => value.replace(/\D/g, '')}
									className='delivery-input delivery-input--otp'
									length={6}
								/>
							</Form.Item>
						</div>
					)}
				/>
			</div>
		</Form>
	)
}
