import { HomeIcon } from '@icons/index'
import { breadcrumbNames } from '@utils/index'
import { PRODUCT_CARD_LIST } from '@utils/mocks/CatalogMock.data'
import { Breadcrumb } from 'antd'
import { Link, useLocation, useParams } from 'react-router'
import './Breadcrumbs.css'

export const Breadcrumbs = () => {
	const location = useLocation()
	const { id } = useParams()
	const paramsId = typeof id === 'string' && parseInt(id)

	// Получаем массив путей
	const pathsArray = location.pathname.split('/').filter(i => i)

	// Функция для получения названия breadcrumb
	const getBreadcrumbName = (url: string, segment: string) => {
		if (breadcrumbNames[url]) {
			return breadcrumbNames[url].label
		}

		const dynamicPath = url.replace('/\/\d+/g', '/:id')
		// Проверяем есть ли такой путь в списке маршрутов
		if (breadcrumbNames[dynamicPath]) {
			if (/^\d+$/.test(segment)) {
				return `#${segment}`
			}
			return breadcrumbNames[dynamicPath].label
		}

		// Возвращаем отформатированную строку
		return segment
			.split('-')
			.map(item => item.charAt(0).toUpperCase() + item.slice(1))
			.join(' ')
	}

	const items = [
		{
			title: (
				<Link to='/'>
					<span className='flex items-center gap-1.5'>
						<HomeIcon />
						Главная
					</span>
				</Link>
			),
		},

		//Мапим остальные пути
		...pathsArray.map((segment, index) => {
			// На каждой итерации добавляем новый сегмент пути
			const url = `/${pathsArray.slice(0, index + 1).join('/')}`
			const isLastSegment = index === pathsArray.length - 1
			const breadcrumbName = getBreadcrumbName(url, segment)

			const productName = PRODUCT_CARD_LIST.find(
				item => item.id === parseInt(breadcrumbName),
			)

			//Проверяем если paramsId равен id товара подставляем название товара иначе название категории
			const breadcrumbTitle =
				productName?.id === paramsId ? productName?.name : breadcrumbName

			return {
				title: isLastSegment ? (
					breadcrumbTitle
				) : (
					<Link to={url}>{breadcrumbName}</Link>
				),
			}
		}),
	]

	return (
		<div className='wrapper'>
			<Breadcrumb className='breadcrumb' items={items} />
		</div>
	)
}
