import { IIcon } from '@interfaces/index'

export const CircleIcon = ({ size = 9, fill }: IIcon) => {
	const circleSize = size / 2
	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill={fill ? fill : '#000000'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx={circleSize} cy={circleSize} r={circleSize} />
		</svg>
	)
}
