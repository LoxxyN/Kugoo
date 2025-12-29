import { MailingModal } from '@components/MailingModal/MailingModal'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import './FooterMailingForm.css'

export const FooterMailingForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [form] = Form.useForm()

	const onFinish = () => {
		setIsOpen(!isOpen)
		form.resetFields()
	}

	const onFinishFailed = () => {
		message.error('Неверно введены данные')
	}

	return (
		<>
			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className='mailing-form'
				variant='filled'
			>
				<Form.Item
					name='email'
					rules={[
						{
							required: true,
							message: 'Сначала введите почту',
						},
						{
							type: 'email',
							message: 'Введите корректный email',
						},
					]}
				>
					<Input placeholder='Введите Ваш email' id='email' type='email' />
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='button-white h-14'
					>
						Подписаться
					</Button>
				</Form.Item>

				{isOpen && <MailingModal isModalOpen={isOpen} handleClose={onFinish} />}
			</Form>
		</>
	)
}
