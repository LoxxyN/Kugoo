import { Modal } from 'antd'

export const LogoutModal = ({
	isOpen,
	closeModal,
	handleLogout,
}: {
	isOpen: boolean
	closeModal: () => void
	handleLogout: () => void
}) => {
	return (
		<Modal
			width={372}
			open={isOpen}
			onCancel={closeModal}
			onOk={handleLogout}
			okText={'Выйти'}
			cancelText={'Вернуться'}
			centered
		>
			<h2 className='text-center text-xl'>Вы действительно хотите выйти?</h2>
		</Modal>
	)
}
