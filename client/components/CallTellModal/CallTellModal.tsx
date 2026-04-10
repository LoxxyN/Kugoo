import { zodResolver } from '@hookform/resolvers/zod'
import { useNotifications } from '@hooks/index'
import { TModal } from '@interfaces/index'
import { formatPhoneNumber, phoneSchema } from '@utils/index'
import { Button, Checkbox, Form, Input, Modal } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import './CallTellModal.css'

const modalFormSchema = z.object({
	phone: phoneSchema,
	agreeToTerms: z.boolean().refine(value => value === true, {
		message: 'Необходимо подвердить согласие',
	}),
})

type TModalSchema = z.infer<typeof modalFormSchema>

export const CallTellModal = ({
	title,
	description,
	buttonText,
	hasSocials,
	isModalOpen,
	handleClose,
}: TModal) => {
	const { modalMessages } = useNotifications()
	const {
		handleSubmit,
		control,
		reset,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<TModalSchema>({
		resolver: zodResolver(modalFormSchema),
		defaultValues: {
			phone: '',
			agreeToTerms: false,
		},
		mode: 'onChange',
	})

	const onFinish = () => {
		modalMessages.finishSuccess()
		reset()
		handleClose()
	}

	const onFinishFailed = () => {
		modalMessages.finishFailed()
	}

	return (
		<>
			<Modal
				className='tell-modal'
				open={isModalOpen}
				onCancel={handleClose}
				closable={{ 'aria-label': 'Custom Close Button' }}
				cancelButtonProps={{ hidden: true }}
				okButtonProps={{ hidden: true }}
			>
				<div className='modal__left'>
					<div className='modal__heading'>
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
					<div className='modal__contact'>
						{hasSocials && (
							<>
								<span>Как с вами удобнее связаться?</span>
								<div className='modal__social-list'>
									<button className='modal__social-item'>
										<img src='/images/viber-chat.svg' alt='viber-chat' />
									</button>
									<button className='modal__social-item'>
										<img src='/images/whatsapp-chat.svg' alt='whatsapp-chat' />
									</button>
									<button className='modal__social-item'>
										<img src='/images/telegram-chat.svg' alt='telegram-chat' />
									</button>
								</div>
							</>
						)}

						<Form
							onFinish={handleSubmit(onFinish)}
							onFinishFailed={onFinishFailed}
							className='modal__form'
						>
							<Controller
								name='phone'
								control={control}
								render={({ field }) => (
									<Form.Item
										validateStatus={errors.phone ? 'error' : ''}
										help={errors.phone?.message}
										required
									>
										<Input
											variant='filled'
											value={field.value}
											type='tel'
											placeholder='+7 (___) __ - __ - __'
											onChange={e => {
												const formatted = formatPhoneNumber(e.target.value)
												setValue('phone', formatted, {
													shouldDirty: true,
													shouldValidate: true,
												})
											}}
										/>
									</Form.Item>
								)}
							/>
							<Form.Item>
								<Button
									className='modal__confirm-button'
									htmlType='submit'
									type='primary'
									disabled={isSubmitting}
									block
								>
									{isSubmitting ? 'Обработка' : buttonText}
								</Button>
							</Form.Item>
							<Controller
								name='agreeToTerms'
								control={control}
								render={({ field }) => (
									<Form.Item
										help={errors.agreeToTerms?.message}
										validateStatus={errors.agreeToTerms ? 'error' : ''}
									>
										<Checkbox {...field} checked={field.value}>
											Я согласен на обработку персональных данных и{' '}
											<a href='#'>политикой конфиденциальности</a>
										</Checkbox>
									</Form.Item>
								)}
							/>
						</Form>
					</div>
				</div>
				<div className='modal__right'>
					<img src='/images/call-tell-woman-image.png' alt='woman' />
				</div>
			</Modal>
		</>
	)
}
