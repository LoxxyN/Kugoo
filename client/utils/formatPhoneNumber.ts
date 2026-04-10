export const formatPhoneNumber = (value: string) => {
	const cleanedRaw = value.replace(/\D/g, '')
	const cleaned = cleanedRaw.startsWith('8')
		? '7' + cleanedRaw.slice(1)
		: cleanedRaw

	if (cleaned.length === 0) return ''

	// Форматирование по мере ввода
	let formatted = ''
	if (cleaned.startsWith('7')) {
		formatted = '+' + cleaned[0] + ' '
		if (cleaned.length > 1) {
			formatted += '(' + cleaned.slice(1, 4)
			if (cleaned.length > 4) {
				formatted += ') ' + cleaned.slice(4, 7)
				if (cleaned.length > 7) {
					formatted += '-' + cleaned.slice(7, 9)
					if (cleaned.length > 9) {
						formatted += '-' + cleaned.slice(9, 11)
					}
				}
			}
		}
	} else {
		formatted = cleaned
	}

	return formatted.trim()
}
