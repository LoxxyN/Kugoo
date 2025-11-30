import { CartIcon, CartMenu } from '@components/index'
import { Heart, Scales } from '@icons/index'
import { useState } from 'react'
import './HeaderLayout.css'

export const HeaderLayout = () => {
	const [isOpen, setIsOpen] = useState(false)

	const showCart = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	return (
		<header>
			<div className='header__icons py-3'>
				<Scales />
				<Heart />
				<CartIcon onClick={showCart} />
				<CartMenu isOpen={isOpen} onClose={onClose} />
			</div>
		</header>
	)
}
