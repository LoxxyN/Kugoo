import { api } from './axios'

export const registerUser = async (email: string, password: string) => {
	const response = await api.post(
		'/auth/register',
		JSON.stringify({ email, password }),
	)

	return response.data
}

export const loginUser = async (email: string, password: string) => {
	const response = await api.post(
		'/auth/login',
		JSON.stringify({ email, password }),
	)

	return response.data
}

export const logoutUser = async () => {
	const response = await api.post('/auth/logout')
	return response.data
}

export const getUserData = async () => {
	const response = await api.get('/auth/me')
	return response.data
}
