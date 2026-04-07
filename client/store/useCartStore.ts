import { create } from 'zustand'

interface ICartStore {
	isCartOpen: boolean
	handleOpenCart: () => void
	handleCloseCart: () => void
}

export const useCartStore = create<ICartStore>()(set => ({
	isCartOpen: false,
	handleOpenCart: () => set(() => ({ isCartOpen: true })),
	handleCloseCart: () => set(() => ({ isCartOpen: false })),
}))
