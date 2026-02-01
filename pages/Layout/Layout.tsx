import { Breadcrumbs } from '@components/index'
import { FooterLayout, HeaderLayout } from '@layouts/index'
import { Outlet, useLocation } from 'react-router'

export const Layout = () => {
	const location = useLocation()
	const isMainPage = location.pathname === '/'

	return (
		<>
			<HeaderLayout />
			{!isMainPage && <Breadcrumbs />}
			<Outlet />
			<FooterLayout />
		</>
	)
}
