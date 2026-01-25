import { Layout, MainPage, ProductPage } from '@pages/index'
import { ConfigProvider } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router'

export const AppRouter = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#6F73EE',
				},
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<MainPage />} />
						<Route path='/catalog/:id' element={<ProductPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ConfigProvider>
	)
}
