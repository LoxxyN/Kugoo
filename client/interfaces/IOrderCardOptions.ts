export type TPayments =
	| 'card'
	| 'cash'
	| 'banking'
	| 'online'
	| 'installment'
	| 'credit'

export type TDelivery = 'pickup' | 'courier' | 'cdek'

export interface IOrderCardOptions {
	value: TPayments | TDelivery
	title: string
	body: string | React.ReactNode
	footer?: string | React.ReactNode
}
