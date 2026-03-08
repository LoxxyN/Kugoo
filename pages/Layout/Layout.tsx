import { FooterLayout, HeaderLayout } from '@layouts/index'
import { Outlet } from 'react-router'

export const Layout = () => {
	return (
		<>
			<HeaderLayout />
			<Outlet />
			<FooterLayout />
		</>
	)
}
