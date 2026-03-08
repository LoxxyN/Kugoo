export const splitNumber = (price: number): string => {
	if (typeof price === 'undefined') return ''
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
