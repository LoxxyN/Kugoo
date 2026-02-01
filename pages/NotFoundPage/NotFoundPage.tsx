import { useNavigate } from 'react-router'

export const NotFoundPage = () => {
	const navigate = useNavigate()

	return (
		<section className='flex items-center justify-center flex-col gap-1'>
			<h2>Страница не найдена</h2>
			<p onClick={() => navigate(-1)}>Вернуться обратно</p>
		</section>
	)
}
