import { IIcon } from '@interfaces/index'

export const CatalogIcon = ({ size, fill }: IIcon) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 13 12'
			fill={fill ? fill : '#FFFFFF'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<line
				x1='0.65'
				y1='0.649805'
				x2='12.35'
				y2='0.649805'
				stroke='white'
				strokeWidth='1.3'
				strokeLinecap='round'
			/>
			<line
				x1='0.65'
				y1='5.6498'
				x2='12.35'
				y2='5.6498'
				stroke='white'
				strokeWidth='1.3'
				strokeLinecap='round'
			/>
			<line
				x1='6.65'
				y1='10.6498'
				x2='12.35'
				y2='10.6498'
				stroke='white'
				strokeWidth='1.3'
				strokeLinecap='round'
			/>
		</svg>
	)
}
