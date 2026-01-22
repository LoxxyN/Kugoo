import { CircleIcon, InfoIcon } from '@icons/index'
import { IProductOptions } from '@interfaces/index'
import { splitNumber } from '@utils/splitNumber'
import { Divider, Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'

import clsx from 'clsx'
import './ProductOptions.css'

interface IOptionsEvents {
	initialOptions: IProductOptions
	onOptionsChange: (newOptions: IProductOptions) => void
}

export const ProductOptions = ({
	initialOptions,
	onOptionsChange,
}: IOptionsEvents) => {
	const [options, setOptions] = useState(initialOptions)

	const handleComplectationChange = (event: RadioChangeEvent): void => {
		const newOptions = { ...options, complectation: event.target.value }
		setOptions(newOptions)
		onOptionsChange({ complectation: event.target.value })
	}
	const handleWarrantyChange = (event: RadioChangeEvent): void => {
		const newOptions = { ...options, warranty: event.target.value }
		setOptions(newOptions)
		onOptionsChange({ warranty: event.target.value })
	}
	const handleAdditionalChange = (event: RadioChangeEvent): void => {
		const newOptions = { ...options, additional: event.target.value }
		setOptions(newOptions)
		onOptionsChange({ additional: event.target.value })
	}
	const handlePackagingChange = (event: RadioChangeEvent): void => {
		const newOptions = { ...options, packaging: event.target.value }
		setOptions(newOptions)
		onOptionsChange({ packaging: event.target.value })
	}

	return (
		<div>
			<div className='product__options-heading'>
				<h3>Комплектация</h3>
				<InfoIcon />
			</div>
			<Radio.Group
				onChange={handleComplectationChange}
				value={options?.complectation}
				className='product__description-complectation'
			>
				<Radio.Button
					value='basic'
					className={clsx('complectation__card complectation__card--small', {
						'complectation__card-active': options?.complectation === 'basic',
					})}
				>
					Базовая
				</Radio.Button>
				<Radio.Button
					value='max'
					className={clsx('complectation__card complectation__card--small', {
						'complectation__card-active': options?.complectation === 'max',
					})}
				>
					Версия MAX
				</Radio.Button>
				<Radio.Button
					value='vip'
					className={clsx('complectation__card complectation__card--small', {
						'complectation__card-active': options?.complectation === 'vip',
					})}
				>
					VIP-версия
				</Radio.Button>
			</Radio.Group>

			<Divider />

			<div className='product__options-heading'>
				<h3>Гарантия</h3>
			</div>
			<Radio.Group
				onChange={handleWarrantyChange}
				value={options?.warranty}
				className='product__description-complectation'
			>
				<Radio.Button
					value='basic'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.warranty === 'basic',
					})}
				>
					Стандартная 1 год <span>Бесплатно</span>
				</Radio.Button>
				<Radio.Button
					value='extended'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.warranty === 'extended',
					})}
				>
					Расширенная 2 года <span>{splitNumber(2990)} руб.</span>
				</Radio.Button>
			</Radio.Group>

			<Divider />

			<div className='product__options-heading'>
				<h3>Дополнительные услуги</h3>
			</div>
			<Radio.Group
				onChange={handleAdditionalChange}
				value={options?.additional}
				className='product__description-complectation'
			>
				<Radio.Button
					value='none'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.additional === 'none',
					})}
				>
					Нет <span>{splitNumber(1520)} руб.</span>
				</Radio.Button>
				<Radio.Button
					value='configuration'
					className={clsx('complectation__card', {
						'complectation__card-active':
							options?.additional === 'configuration',
					})}
				>
					Настройка <span>{splitNumber(3850)} руб.</span>
				</Radio.Button>
				<Radio.Button
					value='waterproofing'
					className={clsx('complectation__card', {
						'complectation__card-active':
							options?.additional === 'waterproofing',
					})}
				>
					Гидроизоляция <span>{splitNumber(2990)} руб.</span>
				</Radio.Button>
				<Radio.Button
					value='multi'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.additional === 'multi',
					})}
				>
					Гидроизоляция и настройка <span>{splitNumber(3409)} руб.(-30%)</span>
				</Radio.Button>
			</Radio.Group>

			<Divider />

			<div className='product__options-heading'>
				<h3>Подарочная упаковка</h3>
			</div>
			<Radio.Group
				onChange={handlePackagingChange}
				value={options?.packaging}
				className='product__description-complectation'
			>
				<Radio.Button
					value='none'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.packaging === 'none',
					})}
				>
					Нет
				</Radio.Button>
				<Radio.Button
					value='pink'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.packaging === 'pink',
					})}
				>
					<CircleIcon size={45} fill='#FA6BFD' />
					Розовый
				</Radio.Button>
				<Radio.Button
					value='blue'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.packaging === 'blue',
					})}
				>
					<CircleIcon size={45} fill='#6B7AFD' />
					Синий
				</Radio.Button>
				<Radio.Button
					value='red'
					className={clsx('complectation__card', {
						'complectation__card-active': options?.packaging === 'red',
					})}
				>
					<CircleIcon size={45} fill='#F45A5A' />
					Красный
				</Radio.Button>
			</Radio.Group>
		</div>
	)
}
