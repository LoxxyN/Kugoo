import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delayMs: number = 350) => {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebounce(value), delayMs)

		return () => clearTimeout(timer)
	}, [value, delayMs])

	return debounce
}
