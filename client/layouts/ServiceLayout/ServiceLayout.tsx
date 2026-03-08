import { ServiceCards } from '@components/index'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import { SERVICE_CARDS, SHOP_CARDS } from './ServiceCards.items'
import './ServiceLayout.css'

export const ServiceLayout = () => {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Интернет-магазин',
			children: <ServiceCards itemsCards={SHOP_CARDS} listType='shop' />,
		},
		{
			key: '2',
			label: 'Сервисный центр',
			children: <ServiceCards itemsCards={SERVICE_CARDS} listType='service' />,
		},
	]

	return (
		<section className='service'>
			<div className='wrapper'>
				<h2>
					Предлагаем самые выгодные цены на продукты Kugoo за счет прямых
					поставок
				</h2>
				<p>и заботимся об удобстве покупателей</p>

				<Tabs
					defaultActiveKey='1'
					type='card'
					className='service-tabs'
					items={items}
				/>
			</div>
		</section>
	)
}
