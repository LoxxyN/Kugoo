import { LoginForm, RegisterForm } from '@components/index'
import { useLogin, useNotifications, useRegister } from '@hooks/index'
import { Modal } from 'antd'
import { useCallback, useState } from 'react'
import './AuthModal.css'

export const AuthModal = ({
	isModalOpen,
	handleCloseModal,
}: {
	isModalOpen: boolean
	handleCloseModal: () => void
}) => {
	const [isRegisterForm, setIsRegisterForm] = useState(false)
	const { modalMessages } = useNotifications()
	const loginMutation = useLogin()
	const registerMutation = useRegister()

	const handleWindowChange = useCallback(() => {
		setIsRegisterForm(prev => !prev)
	}, [])

	const handleLogin = (data: { email: string; password: string }) => {
		loginMutation.mutate(data)
	}

	const onRegisterSuccess = useCallback(() => {
		handleWindowChange()
		modalMessages.successRegistration()
	}, [handleWindowChange, modalMessages])

	const handleRegister = (data: {
		email: string
		password: string
		confirmPassword: string
	}) => {
		registerMutation.mutate(data, {
			onSuccess: onRegisterSuccess,
			onError: error => {
				console.error(error)
				modalMessages.errorRegistration()
			},
		})
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
