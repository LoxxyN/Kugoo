import { ICartItem } from './ICartItem'

export type TCartPayload = { userId: string; items: ICartItem[] }
export type TCartApiResponse = { success: boolean; data: TCartPayload }
