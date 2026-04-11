import {
	getUserData,
	loginUser,
	logoutUser,
	registerUser,
} from '@services/index'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const DAY = 1000 * 60 * 60 * 24
const MONTH = DAY * 30

export const useLogin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			loginUser(email, password),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userData'] })
		},
	})
}

export const useRegister = () => {
	return useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			registerUser(email, password),
	})
}

export const useLogout = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: logoutUser,
		onSuccess: () => {
			queryClient.setQueryData(['userData'], null)
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

export const useUserData = () => {
	return useQuery({
		queryFn: getUserData,
		queryKey: ['userData'],
		staleTime: MONTH,
		gcTime: MONTH,
		retry: false,
	})
}
