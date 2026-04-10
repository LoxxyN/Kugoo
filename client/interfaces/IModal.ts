export type TModal = IModalTexts & IModalProps

export interface IModalProps {
	isModalOpen: boolean
	handleClose: () => void
}

export interface IModalTexts {
	buttonText: string
	title: string
	description: string
	hasSocials: boolean
}
