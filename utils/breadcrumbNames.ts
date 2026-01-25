import { IBreadcrumbNames } from '@interfaces/index'

export const breadcrumbNames: IBreadcrumbNames = {
	'/': { label: 'Главная' },
	'/catalog': { label: 'Каталог' },
	'/catalog/:id': { label: 'Главная', dynamic: true },
}
