import { api } from './axios'

interface IRegisterResponse {
	userId: string
	success: boolean
}

interface ILoginResponse {
	message: string
	success: boolean
}

interface ILogoutResponse {
	message: string
	success: boolean
}

interface IUserData {
	userId: string
}

export const registerUser = async (email: string, password: string) => {
	const response = await api.post<IRegisterResponse>(
		'/auth/register',
		JSON.stringify({ email, password }),
	)

	return response.data
}

export const loginUser = async (email: string, password: string) => {
	const response = await api.post<ILoginResponse>(
		'/auth/login',
		JSON.stringify({ email, password }),
	)

	return response.data
}

export const logoutUser = async () => {
	const response = await api.post<ILogoutResponse>('/auth/logout')

	return response.data
}

export const getUserData = async () => {
	const response = await api.get<IUserData>('/auth/me')

	return response.data
}
