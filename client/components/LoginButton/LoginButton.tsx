import { AuthModal } from '@components/index'
import { useState } from 'react'

export const LoginButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<button onClick={showModal} className='header__login-button'>
				Войти
			</button>

			<AuthModal isModalOpen={isModalOpen} handleCloseModal={closeModal} />
		</>
	)
}
