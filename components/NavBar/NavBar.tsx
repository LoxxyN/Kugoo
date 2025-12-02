import './NavBar.css'
import { NAVBAR_LINKS } from './NavBar.links'

export const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<div className='wrapper'>
				{NAVBAR_LINKS.map(item => (
					<div key={item.id} className='nav-bar__link'>
						<a href={item.link}>{item.title}</a>
					</div>
				))}
			</div>
		</nav>
	)
}
