import { cn } from '@utils/index'
import { Select } from 'antd'

type TSortOptions = Record<string, string>

export const CatalogSorting = ({
	sortBy,
	sortDir,
	onSortByChange,
	onSortDirChange,
	sortOptions,
}: {
	sortBy: string
	sortDir: string
	onSortByChange: (sortBy: string) => void
	onSortDirChange: (sortDir: string) => void
	sortOptions: TSortOptions[]
}) => {
	return (
		<>
			<Select className={cn('w-42')} value={sortBy} onChange={onSortByChange}>
				{sortOptions.map(option => (
					<Select.Option key={option.value} value={option.value}>
						{option.label}
					</Select.Option>
				))}
			</Select>

			<Select className={cn('w-42')} value={sortDir} onChange={onSortDirChange}>
				<Select.Option key='asc' value='asc'>
					По возрастанию
				</Select.Option>
				<Select.Option key='desc' value='desc'>
					По убыванию
				</Select.Option>
			</Select>
		</>
	)
}
