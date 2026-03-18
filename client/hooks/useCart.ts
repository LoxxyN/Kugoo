import {
	addToCart,
	clearCart,
	getCart,
	removeCartItem,
	updateCartItem,
} from '@services/index'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useCart = () => {
	return useQuery({
		queryKey: ['cart'],
		queryFn: getCart,
	})
}

export const useAddCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: addToCart,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

export const useUpdateCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
			updateCartItem(itemId, quantity),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

export const useRemoveCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: removeCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

export const useClearCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: clearCart,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}
