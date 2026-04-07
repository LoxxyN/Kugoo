import { BlockSkeleton, CallTellModal } from '@components/index'
import { useNotifications } from '@hooks/index'
import { modalTexts } from '@utils/index'
import { Form } from 'antd'
import { lazy, Suspense, useState } from 'react'
import './AsideAds.css'

const AsideAdsProductOfMonth = lazy(
	() => import('./AsideAdsProductOfMonth/AsideAdsProductOfMonth'),
)

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
			<Suspense fallback={<BlockSkeleton className='h-36' />}>
				<AsideAdsProductOfMonth />
			</Suspense>

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
