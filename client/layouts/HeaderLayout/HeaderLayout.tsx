import {
	CartMenu,
	CartMenuIcon,
	CatalogButton,
	LoginButton,
	LogoutButton,
	NavBar,
} from '@components/index'
import { useUserData } from '@hooks/index'
import { HeartIcon, Logo, ScalesIcon } from '@icons/index'
import { useCartStore } from '@store/index'
import { Button, Input } from 'antd'
import './HeaderLayout.css'

export const HeaderLayout = () => {
	const { data: userData } = useUserData()
	const { isCartOpen, handleOpenCart, handleCloseCart } = useCartStore()
	const isLogin = !!userData

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
							<CartMenuIcon onClick={handleOpenCart} />
							<CartMenu isOpen={isCartOpen} onClose={handleCloseCart} />
							<LogoutButton />
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
