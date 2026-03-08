import { HomeIcon } from '@icons/index'
import { IProductCard } from '@interfaces/index'
import { breadcrumbNames } from '@utils/index'
import { Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { productService } from '../../services/productService'
import './Breadcrumbs.css'

export const Breadcrumbs = () => {
	const [products, setProducts] = useState<IProductCard[] | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const location = useLocation()
	const { id } = useParams()

	useEffect(() => {
		loadProductById()
	}, [])

	const loadProductById = async () => {
		try {
			setLoading(true)
			const data = await productService.getAllProducts()
			setProducts(data)
			setError(null)
		} catch (err) {
			setError('Не удалось загрузить товары')
			console.error(err)
		} finally {
			//Перемещение экрана наверх при загрузке страницы
			window.scrollTo(0, 0)
			setLoading(false)
		}
	}

	if (typeof id === 'undefined') return
	if (loading) return <div>Загрузка товаров...</div>
	if (error) return <div>Ошибка: {error}</div>
	if (products === null) return

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

			const productName = products.find(item => item._id === breadcrumbName)
			console.log(productName, breadcrumbName)

			//Проверяем если paramsId равен id товара подставляем название товара иначе название категории
			const breadcrumbTitle =
				productName?._id === paramsId ? productName?.name : breadcrumbName

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
