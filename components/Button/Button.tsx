interface IButtonProps {
	children: React.ReactNode
	onClick: () => void | boolean
	className?: string
}

export const Button = ({ children, onClick, className }: IButtonProps) => {
	return (
		<button
			className='h-10 w-10 rounded-full border border-[#EAEBED] bg-transparent hover:bg-[#F4F7FB] hover:border-[#F4F7FB] transition-all flex items-center justify-center'
			onClick={onClick}
		>
			{children}
		</button>
	)
}
