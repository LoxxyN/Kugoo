import './InputCounter.css'

interface IInputCounter {
	value: number
	handleIncrease: () => void
	handleDecrease: () => void
}

export const InputCounter = ({
	value,
	handleIncrease,
	handleDecrease,
}: IInputCounter) => {
	return (
		<div className='counter__wrapper'>
			<button
				onClick={handleDecrease}
				className='counter__button counter__button-minus'
			>
				-
			</button>
			<input
				type='text'
				name='item-counter-input'
				className='counter__input'
				value={value}
				readOnly
			/>
			<button
				onClick={handleIncrease}
				className='counter__button counter__button-plus'
			>
				+
			</button>
		</div>
	)
}
