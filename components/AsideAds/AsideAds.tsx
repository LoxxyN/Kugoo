import { CallTellModal } from '@components/CallTellModal/CallTellModal'
import { useNotifications } from '@hooks/useNotifications'
import { modalTexts } from '@utils/modalTexts'
import { Form } from 'antd'
import { useState } from 'react'
import './AsideAds.css'
import { AsideAdsProductOfMonth } from './AsideAdsProductOfMonth/AsideAdsProductOfMonth'

export const AsideAds = () => {
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
		<div className='side-ads'>
			<AsideAdsProductOfMonth />

			<>
				<div className='side-ads__call-to-manager' onClick={handleOpenModal}>
					<p>Задать вопрос менеджеру</p>
				</div>
				<CallTellModal
					{...modalTexts[1]}
					isModalOpen={isModalOpen}
					handleClose={handleCloseModal}
					form={form}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				/>
			</>
		</div>
	)
}
