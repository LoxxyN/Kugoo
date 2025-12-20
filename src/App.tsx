import {
	CategoriesLayout,
	HeaderLayout,
	HeroLayout,
	ProductsLayout,
	ServiceLayout,
} from '@layouts/index'
import { ConfigProvider } from 'antd'

export const App = () => {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#6F73EE',
					},
				}}
			>
				<HeaderLayout />
				<HeroLayout />
				<ProductsLayout />
				<CategoriesLayout />
				<ServiceLayout />
			</ConfigProvider>
		</>
	)
}
