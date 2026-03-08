import type { InputNumberProps } from 'antd'
import { Slider } from 'antd'
import { useState } from 'react'
import './FilterPriceSlider.css'

export const FilterPriceSlider = () => {
	const [sliderValue, setSliderValue] = useState<[number, number]>([
		10000, 90000,
	])

	const onChange = (newValue: [number, number]) => {
		setSliderValue(newValue)
	}

	const handleMinInputValue: InputNumberProps['onChange'] = newValue => {
		if (newValue !== null && newValue <= sliderValue[1]) {
			setSliderValue([newValue as number, sliderValue[1]])
		}
	}

	const handleMaxInputValue: InputNumberProps['onChange'] = newValue => {
		if (newValue !== null && newValue >= sliderValue[0]) {
			setSliderValue([sliderValue[0], newValue as number])
		}
	}

	return (
		<div>
			<h3>Цена</h3>
			<Slider
				className='slider'
				range
				defaultValue={sliderValue}
				min={10000}
				max={90000}
				value={sliderValue}
				onChange={onChange}
				tooltip={{ open: false }}
			/>
			<div className='inputs'>
				<input
					className='input-number'
					onChange={handleMinInputValue}
					value={sliderValue[0]}
					min={0}
					max={sliderValue[1]}
				/>
				<span>
					<svg
						width='15'
						height='1'
						viewBox='0 0 15 1'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line y1='0.5' x2='15' y2='0.5' stroke='#282739' />
					</svg>
				</span>
				<input
					className='input-number'
					onChange={handleMaxInputValue}
					value={sliderValue[1]}
					min={sliderValue[0]}
					max={90000}
				/>
			</div>
		</div>
	)
}
