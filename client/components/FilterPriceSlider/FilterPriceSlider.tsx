import { Slider } from 'antd'
import { useState, memo } from 'react'
import './FilterPriceSlider.css'


export const FilterPriceSlider = memo(() => {
	const [sliderValue, setSliderValue] = useState<[number, number]>([
		10000, 90000,
	])

	const onChange = (newValue: number[]) => {
		setSliderValue([newValue[0], newValue[1]])
	}

	const handleMinInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		if (!isNaN(newValue) && newValue <= sliderValue[1]) {
			setSliderValue([newValue, sliderValue[1]])
		}
	}

	const handleMaxInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		if (!isNaN(newValue) && newValue >= sliderValue[0]) {
			setSliderValue([sliderValue[0], newValue])
		}
	}

	return (
		<div>
			<h3>Цена</h3>
			<Slider
				className='slider'
				range={true}
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
})
