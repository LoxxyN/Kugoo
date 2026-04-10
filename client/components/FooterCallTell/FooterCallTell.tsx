import { CallTellModal } from '@components/index'
import { useModalStore } from '@store/index'
import { modalTexts } from '@utils/modalTexts.ts'
import { Button } from 'antd'

export const FooterCallTell = () => {
	const { handleCallModalClose, handleCallModalOpen, isCallModalOpen } =
		useModalStore()

	return (
		<>
			<Button onClick={handleCallModalOpen} type='link'>
				Заказать звонок
			</Button>
			<CallTellModal
				{...modalTexts[0]}
				isModalOpen={isCallModalOpen}
				handleClose={handleCallModalClose}
			/>
		</>
	)
}
