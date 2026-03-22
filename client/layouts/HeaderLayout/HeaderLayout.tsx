import {
	CartMenu,
	CartMenuIcon,
	CatalogButton,
	LoginButton,
	NavBar,
} from '@components/index'
import { useUserData } from '@hooks/index'
import { HeartIcon, Logo, ScalesIcon } from '@icons/index'
import { Button, Input } from 'antd'
import { useState } from 'react'
import './HeaderLayout.css'

export const HeaderLayout = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { data: userData } = useUserData()
	const isLogin = !!userData

	const showCart = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	return (
		<header>
			<div className='wrapper'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<a href='/'>
							<Logo />
						</a>
					</div>
					<CatalogButton />
					<Input.Search
						width={603}
						className='header__search'
						placeholder='Искать самокат KUGOO'
						enterButton
					/>
					{isLogin ? (
						<div className='header__icons py-3'>
							<Button
								icon={<ScalesIcon size={20} />}
								type='text'
								shape='circle'
							/>
							<Button
								icon={<HeartIcon size={20} fill='#000000' />}
								type='text'
								shape='circle'
							/>
							<CartMenuIcon onClick={showCart} />
							<CartMenu isOpen={isOpen} onClose={onClose} />
						</div>
					) : (
						<LoginButton />
					)}
				</div>
			</div>

			<NavBar />
		</header>
	)
}
