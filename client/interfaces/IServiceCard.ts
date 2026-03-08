export interface IServiceCard {
	id: number
	icon?: React.ReactNode
	title?: string
	description?: string | React.ReactNode
	cardHasImage?: boolean
	serviceCardImageType?: 'shop' | 'service'
}
