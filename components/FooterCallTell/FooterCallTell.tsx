import { CallTellModal } from '@components/index'
import { useNotifications } from '@hooks/index'
import { modalTexts } from '@utils/modalTexts.ts'
import { Button, Form } from 'antd'
import { useState } from 'react'

export const FooterCallTell = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { modalMessages } = useNotifications()
	const [form] = Form.useForm()

	const handleOpenModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	const onFinish = () => {
		form.resetFields()
		setIsModalOpen(!isModalOpen)
		modalMessages.finishSuccess()
	}

	const onFinishFailed = () => {
		modalMessages.finishFailed()
	}

	return (
		<>
			<Button onClick={handleOpenModal} type='link'>
				Заказать звонок
			</Button>
			<CallTellModal
				{...modalTexts[0]}
				isModalOpen={isModalOpen}
				handleClose={handleCloseModal}
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			/>
		</>
	)
}
