import { createOrder } from '@services/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IOrderForm } from '@utils/index'

export const useCreateOrder = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: IOrderForm) => createOrder(data),

		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
		onError: error => console.error(`Create order hook error: ${error}`),
	})
}
