import { CartDropdown } from '@components/index'
import { Heart, Scales } from '@icons/index'

import './HeaderLayout.css'

export const HeaderLayout = () => {
	return (
		<header>
			<div className='header__icons'>
				<Scales />
				<Heart />
				<CartDropdown />
			</div>
		</header>
	)
}
