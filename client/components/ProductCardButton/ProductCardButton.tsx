export const ProductCardButton = ({
	onClick,
	children,
}: {
	onClick: () => void | boolean | unknown
	children: React.ReactNode
}) => {
	return (
		<button
			className='button-circle h-10 w-10 border border-[#EAEBED] bg-transparent hover:bg-[#F4F7FB] hover:border-[#F4F7FB] transition-all flex items-center justify-center'
			onClick={onClick}
		>
			{children}
		</button>
	)
}
