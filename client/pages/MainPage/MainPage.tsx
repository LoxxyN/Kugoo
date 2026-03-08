import {
	CategoriesLayout,
	HeroLayout,
	ProductsLayout,
	ServiceLayout,
} from '@layouts/index'

export const MainPage = () => {
	return (
		<>
			<HeroLayout />
			<ProductsLayout />
			<CategoriesLayout />
			<ServiceLayout />
		</>
	)
}
