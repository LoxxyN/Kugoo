import { HomeIcon } from '@icons/index'
import { breadcrumbNames } from '@utils/index'
import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router'
import './Breadcrumbs.css'

export const Breadcrumbs = () => {
	const location = useLocation()

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

			return {
				title: isLastSegment ? (
					breadcrumbName
				) : (
					<Link to={url}>{breadcrumbName}</Link>
				),
			}
		}),
	]

	return <Breadcrumb className='breadcrumb' items={items} />
}
