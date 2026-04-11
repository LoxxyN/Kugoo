import { ICartItem } from '@interfaces/index'
import {
	addToCart,
	clearCart,
	getCart,
	removeCartItem,
	updateCartItem,
} from '@services/index'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const CART_QUERY_KEY = ['cart'] as const

export const useCart = () => {
	return useQuery({
		queryKey: CART_QUERY_KEY,
		queryFn: getCart,
		retry: false,
	})
}

export const useAddCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: addToCart,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
		},
	})
}

export const useUpdateCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			productId,
			quantity,
		}: {
			productId: string
			quantity: number
		}) => updateCartItem(productId, quantity),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
		},
	})
}

export const useRemoveCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: removeCartItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
		},
	})
}

export const useClearCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: clearCart,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
		},
	})
}

//Getters
export const useIsProductInCart = (id: string) => {
	const { isLoading, data: cartData } = useCart()
	const cartItems: ICartItem[] = cartData?.data?.data?.items ?? []

	if (isLoading) {
		return false
	}

	const isProductInCart = cartItems.some(item => item?.productId === id)

	return isProductInCart
}

export const useGetTotalItems = (): number => {
	const { isLoading, data: cartData } = useCart()
	const cartItems: ICartItem[] = cartData?.data?.data?.items ?? []

	if (isLoading) {
		return 0
	}

	const itemsInCart = cartItems.reduce(
		(acc, cartitem) => acc + cartitem.quantity,
		0,
	)

	return itemsInCart
}

export const useGetTotalPrice = (): number => {
	const { isLoading, data: cartData } = useCart()
	const cartItems: ICartItem[] = cartData?.data?.data?.items ?? []

	if (isLoading) {
		return 0
	}

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * (item.quantity || 1),
		0,
	)

	return totalPrice
}

export const useGetTotalPriceWithoutDiscount = (): number => {
	const { isLoading, data: cartData } = useCart()
	const cartItems: ICartItem[] = cartData?.data?.data?.items ?? []

	if (isLoading) {
		return 0
	}

	const totalPriceWithoutDiscount = cartItems.reduce((total, item) => {
		const quantity = item.quantity || 1
		const originalPrice = item.old_price || item.price
		return total + originalPrice * quantity
	}, 0)

	return totalPriceWithoutDiscount
}

export const useGetTotalDiscount = (): number => {
	const { isLoading, data: cartData } = useCart()
	const cartItems: ICartItem[] = cartData?.data?.data?.items ?? []

	if (isLoading) {
		return 0
	}

	const totalDiscount = cartItems.reduce((total, item) => {
		const quantity = item.quantity || 1
		if (item.old_price && item.old_price > item.price) {
			return total + (item.old_price - item.price) * quantity
		}
		return total
	}, 0)

	return totalDiscount
}
