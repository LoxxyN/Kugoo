import { MailingModal } from '@components/index'
import { useNotifications } from '@hooks/index'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import './FooterMailingForm.css'

export const FooterMailingForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { mailingMessages } = useNotifications()
	const [form] = Form.useForm()

	const onFinish = () => {
		if (!isModalOpen) mailingMessages.mailingComplete()
		setIsModalOpen(!isModalOpen)
		form.resetFields()
	}

	const onFinishFailed = () => {
		mailingMessages.mailingFailed()
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
					<Input
						placeholder='Введите Ваш email'
						id='mailing_email'
						type='email'
					/>
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

				{isModalOpen && (
					<MailingModal isModalOpen={isModalOpen} handleClose={onFinish} />
				)}
			</Form>
		</>
	)
}
