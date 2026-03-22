import { AuthForm } from '@components/index'
import { useLogin, useRegister } from '@hooks/useAuth'
import { Modal } from 'antd'
import { useRef, useState } from 'react'
import './AuthModal.css'

export const AuthModal = ({
	isModalOpen,
	handleCloseModal,
}: {
	isModalOpen: boolean
	handleCloseModal: () => void
}) => {
	const [isRegisterForm, setIsRegisterForm] = useState(false)

	const loginMutation = useLogin()
	const registerMutation = useRegister()
	const formRef = useRef<HTMLFormElement>(null)

	const handleWindowChange = () => {
		setIsRegisterForm(!isRegisterForm)
	}

	const sendLoginForm = () => {
		if (formRef.current) {
			const form = new FormData(formRef.current)
			loginMutation.mutate({
				email: form.get('auth_email') as string,
				password: form.get('auth_password') as string,
			})
		}
	}

	const sendRegisterForm = () => {
		if (formRef.current) {
			const form = new FormData(formRef.current)
			registerMutation.mutate({
				email: form.get('auth_email') as string,
				password: form.get('auth_password') as string,
			})
		}
	}

	return (
		<Modal
			className='auth__modal'
			open={isModalOpen}
			onCancel={handleCloseModal}
			cancelButtonProps={{ hidden: true }}
			okButtonProps={{ hidden: true }}
			centered
		>
			<AuthForm
				handleWindowChange={handleWindowChange}
				sendLoginForm={sendLoginForm}
				sendRegisterForm={sendRegisterForm}
				isRegisterForm={isRegisterForm}
				ref={formRef}
			/>
		</Modal>
	)
}
