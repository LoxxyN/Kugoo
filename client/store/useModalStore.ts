import { create } from 'zustand'

interface IModalStore {
	isMailModalOpen: boolean
	handleMailModalOpen: () => void
	handleMailModalClose: () => void

	isCallModalOpen: boolean
	handleCallModalOpen: () => void
	handleCallModalClose: () => void

	isCallManagerModalOpen: boolean
	handleCallManagerModalOpen: () => void
	handleCallManagerModalClose: () => void
}

export const useModalStore = create<IModalStore>()(set => ({
	isMailModalOpen: false,
	handleMailModalOpen: () => set(() => ({ isMailModalOpen: true })),
	handleMailModalClose: () => set(() => ({ isMailModalOpen: false })),

	isCallModalOpen: false,
	handleCallModalOpen: () => set(() => ({ isCallModalOpen: true })),
	handleCallModalClose: () => set(() => ({ isCallModalOpen: false })),

	isCallManagerModalOpen: false,
	handleCallManagerModalOpen: () => set(() => ({ isCallModalOpen: true })),
	handleCallManagerModalClose: () => set(() => ({ isCallModalOpen: false })),
}))
