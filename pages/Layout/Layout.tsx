import { Breadcrumbs } from '@components/index'
import { FooterLayout, HeaderLayout } from '@layouts/index'
import { Outlet } from 'react-router'

export const Layout = () => {
	const isMainPage = window.location.pathname === '/'

	return (
		<>
			<HeaderLayout />
			{!isMainPage && <Breadcrumbs />}
			<Outlet />
			<FooterLayout />
		</>
	)
}
