import {
	CartPage,
	CatalogPage,
	Layout,
	MainPage,
	NotFoundPage,
	ProductPage,
} from '@pages/index'
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
						<Route path='/catalog' element={<CatalogPage />} />
						<Route path='/catalog/:id' element={<ProductPage />} />
						<Route path='/catalog/cart' element={<CartPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ConfigProvider>
	)
}
