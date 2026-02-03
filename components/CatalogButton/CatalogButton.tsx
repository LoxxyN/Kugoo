import {
	CatalogIcon,
	ElectricScooterIcon,
	ElectroBicycleIcon,
	ElectroBikeIcon,
	FloorScalesIcon,
	RobotCleanerIcon,
} from '@icons/index'
import { Dropdown, MenuProps } from 'antd'
import { Link } from 'react-router'
import './CatalogButton.css'

const items: MenuProps['items'] = [
	{
		key: 1,
		label: (
			<Link to='/catalog'>
				<ElectricScooterIcon />
				<span>Электросамокаты</span>
			</Link>
		),
	},
	{
		key: 2,
		label: (
			<Link to='/catalog'>
				<ElectroBikeIcon />
				<span>Электроскутеры</span>
			</Link>
		),
	},
	{
		key: 3,
		label: (
			<Link to='/catalog'>
				<ElectroBicycleIcon />
				<span>Электровелосипеды</span>
			</Link>
		),
	},
	{
		key: 4,
		label: (
			<Link to='/catalog'>
				<RobotCleanerIcon />
				<span>Робот-пылесосы</span>
			</Link>
		),
	},
	{
		key: 5,
		label: (
			<Link to='/catalog'>
				<FloorScalesIcon />
				<span>Весы</span>
			</Link>
		),
	},
]

export const CatalogButton = () => {
	return (
		<Dropdown className='header-catalog' menu={{ items }} trigger={['click']}>
			<button className='header__catalog-button'>
				<CatalogIcon size={13} />
				Каталог
			</button>
		</Dropdown>
	)
}
