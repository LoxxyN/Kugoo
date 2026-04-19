import { formatPhoneNumber, IOrderForm } from '@utils/index'
import { Form, Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import './OrderRecipientForm.css'

export const OrderRecipientForm = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<IOrderForm>()

	return (
		<>
			<h3 className='py-8'>
				<span>Шаг 3.</span>Укажите данные получателя
			</h3>
			<div className='recipient-inputs-grid'>
				<Controller
					name='surname'
					control={control}
					render={({ field }) => (
						<div className='recipient-input__area input-area__1'>
							<Form.Item
								label='Ваша фамилия'
								layout='vertical'
								validateStatus={errors.surname ? 'error' : ''}
								help={errors.surname?.message}
							>
								<Input
									{...field}
									className='recipient-input'
									placeholder='Введите фамилию'
								/>
							</Form.Item>
						</div>
					)}
				/>
				<Controller
					control={control}
					name='name'
					render={({ field }) => (
						<div className='recipient-input__area input-area__2'>
							<Form.Item
								label='Ваше имя'
								layout='vertical'
								validateStatus={errors.name ? 'error' : ''}
								help={errors.name?.message}
							>
								<Input
									{...field}
									className='recipient-input'
									placeholder='Введите имя'
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='phoneNumber'
					render={({ field }) => (
						<div className='recipient-input__area input-area__3'>
							<Form.Item
								label='Ваш телефон'
								layout='vertical'
								validateStatus={errors.phoneNumber ? 'error' : ''}
								help={errors.phoneNumber?.message}
							>
								<Input
									value={field.value}
									type='tel'
									className='recipient-input'
									placeholder='+7 (___) __ - __ - __'
									onChange={e => {
										const formatted = formatPhoneNumber(e.target.value)
										field.onChange(formatted)
									}}
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='email'
					render={({ field }) => (
						<div className='recipient-input__area input-area__4'>
							<Form.Item
								label='Ваш email'
								layout='vertical'
								validateStatus={errors.email ? 'error' : ''}
								help={errors.email?.message}
							>
								<Input
									{...field}
									value={
										typeof field.value === 'string' ||
										typeof field.value === 'number'
											? field.value
											: ''
									}
									className='recipient-input'
									placeholder='Введите email'
								/>
							</Form.Item>
						</div>
					)}
				/>

				<Controller
					control={control}
					name='comment'
					render={({ field }) => (
						<div className='recipient-input__area input-area--5'>
							<Form.Item
								label='Комментарий'
								layout='vertical'
								validateStatus={errors.comment ? 'error' : ''}
								help={errors.comment?.message}
							>
								<Input
									{...field}
									showCount
									maxLength={150}
									className='recipient-input'
									placeholder='Оставьте пожелание или комментарий к заказу'
								/>
							</Form.Item>
						</div>
					)}
				/>
			</div>
		</>
	)
}
