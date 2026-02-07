import { cn } from '@utils/className'
import { Select } from 'antd'

export const CatalogSorting = ({ sortBy, onSortChange, sortOptions }) => {
	return (
		<Select className={cn('w-42')} value={sortBy} onChange={onSortChange}>
			{sortOptions.map(option => (
				<Select.Option key={option.value} value={option.value}>
					{option.label}
				</Select.Option>
			))}
		</Select>
	)
}
