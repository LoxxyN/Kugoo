import { useProductSearch } from '@hooks/index'
import { IProductCard } from '@interfaces/IProductCard'
import { AutoComplete, Input, Spin } from 'antd'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

export const HeaderSearch = () => {
	const [searchText, setSearchText] = useState('')
	const { data, isFetching } = useProductSearch(searchText)
	const navigate = useNavigate()

	const onSelect = (id: string) => {
		setSearchText('')
		navigate(`/catalog/${id}`)
	}

	const options = useMemo(
		() =>
			(data?.data ?? []).map(({ product }: { product: IProductCard }) => ({
				value: product._id,
				label: (
					<div className='flex justify-between gap-x-3'>
						<span>{product.name}</span>
						<span>{product.price} ₽</span>
					</div>
				),
			})),
		[data],
	)

	return (
		<AutoComplete
			className='header__search'
			value={searchText}
			options={searchText.trim().length >= 2 ? options : []}
			onSelect={onSelect}
			onChange={setSearchText}
			notFoundContent={isFetching ? <Spin size='small' /> : 'Ничего не найдено'}
		>
			<Input placeholder='Искать самокат KUGOO' allowClear />
		</AutoComplete>
	)
}
