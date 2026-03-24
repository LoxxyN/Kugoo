import { LoginForm, RegisterForm } from '@components/index'
import { useLogin, useRegister } from '@hooks/index'
import { Modal } from 'antd'
import { useState } from 'react'
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

	const handleWindowChange = () => {
		setIsRegisterForm(!isRegisterForm)
	}

	const handleLogin = (data: { email: string; password: string }) => {
		loginMutation.mutate(data)
	}

	const handleRegister = (data: {
		email: string
		password: string
		confirmPassword: string
	}) => {
		registerMutation.mutate(data)
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
			{isRegisterForm ? (
				<RegisterForm
					handleWindowChange={handleWindowChange}
					onRegister={handleRegister}
				/>
			) : (
				<LoginForm
					handleWindowChange={handleWindowChange}
					onLogin={handleLogin}
				/>
			)}
		</Modal>
	)
}
