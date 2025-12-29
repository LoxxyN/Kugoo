import { Button, Form, Input, Modal, message } from 'antd'
import { useState } from 'react'
import './FooterCallTell.css'

export const FooterCallTell = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [form] = Form.useForm()

	const handleOpenModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	const onFinish = () => {
		form.resetFields()
		setIsModalOpen(!isModalOpen)
	}

	const onFinishFailed = () => {
		message.error('Неверно введены данные, повторите попытку.')
	}

	return (
		<>
			<Button onClick={handleOpenModal} type='link'>
				Заказать звонок
			</Button>
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
						<h2>
							Оставьте заявку и получите профессиональную консультацию от нашего
							менеджера
						</h2>
						<p>Позвоним в течение 5 минут и ответим на все вопросы.</p>

						<span>Как с вами удобнее связаться?</span>
					</div>

					<div className='modal__contact'>
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
						<Form
							form={form}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							className='modal__form'
						>
							<Form.Item
								name='tel'
								rules={[{ required: true, message: 'Заполните поле' }]}
							>
								<Input
									variant='filled'
									type='tel'
									placeholder='+7 (___) __ - __ - __'
									name='tel'
									id='tel'
								/>
							</Form.Item>
							<Form.Item>
								<Button
									className='modal__confirm-button'
									htmlType='submit'
									type='primary'
								>
									Позвоните мне
								</Button>
							</Form.Item>
							<div className='check'>
								<input
									required
									type='checkbox'
									name='confirm'
									autoComplete='true'
									id='confirm'
								/>
								<label htmlFor='confirm' aria-required={true}>
									Нажимая на кнопку, вы соглашаетесь на обработку персональных
									данных и <a href='#'>политикой конфиденциальности</a>
								</label>
							</div>
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
