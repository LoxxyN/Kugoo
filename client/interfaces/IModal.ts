export type TModal = IModalTexts & IModalProps & IModalEvents

export interface IModalProps {
	isModalOpen: boolean
	handleClose: () => void
}

export interface IModalEvents {
	form: unknown
	onFinish: () => void
	onFinishFailed: () => void
}

export interface IModalTexts {
	buttonText: string
	title: string
	description: string
	hasSocials: boolean
}
