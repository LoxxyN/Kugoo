import { IOrderForm } from '@utils/index'
import { api } from './axios'

type TOrderResponse = {
	success: boolean
	data?: { orderId: string }
	error?: string
}

export const createOrder = async (
	data: IOrderForm,
): Promise<TOrderResponse> => {
	try {
		const response = await api.post<TOrderResponse>('/order/create', data)

		return response.data
	} catch (error) {
		console.error(error)
		throw new Error(`Order error ${error}`)
	}
}
