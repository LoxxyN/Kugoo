import { LogoutModal } from '@components/index'
import { useLogout } from '@hooks/index'
import { LogoutIcon } from '@icons/index'
import { useState } from 'react'

export const LogoutButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const logout = useLogout()
	const handleLogout = () => {
		logout.mutate()
	}

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<button onClick={showModal} className='header__logout-button'>
				<LogoutIcon />
			</button>

			<LogoutModal
				isOpen={isModalOpen}
				closeModal={closeModal}
				handleLogout={handleLogout}
			/>
		</>
	)
}
