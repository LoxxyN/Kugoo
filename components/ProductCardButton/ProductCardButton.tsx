import { cn } from '@utils/className'

interface IButtonProps {
	children: React.ReactNode
	onClick: () => void | boolean
	className?: string
}

export const ProductCardButton = ({ children, onClick }: IButtonProps) => {
	return (
		<button
			className={cn(
				'button-circle h-10 w-10 border border-[#EAEBED] bg-transparent hover:bg-[#F4F7FB] hover:border-[#F4F7FB] transition-all flex items-center justify-center'
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
