export const formatNumber = (price: number): string => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Поменять на перебор
