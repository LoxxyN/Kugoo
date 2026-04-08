import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@utils/className'
import { Button } from 'antd'
import { useForm } from 'react-hook-form'
import z from 'zod'
import './AuthForm.css'

const loginSchema = z.object({
	email: z.string().email('Неверный формат email'),
	password: z.string().min(1, 'Введите пароль'),
})

type LoginFormData = z.infer<typeof loginSchema>

export const LoginForm = ({
	handleWindowChange,
	onLogin,
}: {
	handleWindowChange: () => void
	onLogin: (data: LoginFormData) => void
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (data: LoginFormData) => {
		onLogin(data)
	}

	return (
		<div className='auth__window'>
			<h2 className='auth__heading'>Вход</h2>
			<form
				id='auth__form'
				className='auth__form'
				autoComplete='off'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='form__inputs'>
					<div className='form__input-block'>
						<label htmlFor='email'>Почта</label>
						<div className='form__input'>
							<input
								{...register('email')}
								className={cn(
									'form__input-field',
									errors.email ? 'form__input-field--error' : '',
								)}
								id='email'
								type='text'
								placeholder='Введите email'
							/>
							{errors.email && (
								<span className='form__input-error'>
									{errors.email.message}
								</span>
							)}
						</div>
					</div>

					<div className='form__input-block'>
						<label htmlFor='password'>Пароль</label>
						<div className='form__input'>
							<input
								{...register('password')}
								className={cn(
									'form__input-field',
									errors.password ? 'form__input-field--error' : '',
								)}
								id='password'
								placeholder='Введите пароль'
								type='password'
							/>
							{errors.password && (
								<span className='form__input-error'>
									{errors.password.message}
								</span>
							)}
						</div>
					</div>
				</div>

				<div className='mt-2 text-center'>
					<span onClick={handleWindowChange} className='form__change-enter'>
						Уже есть аккаунт?
					</span>
				</div>
			</form>

			<div className='flex mt-8 justify-center'>
				<Button
					form='auth__form'
					htmlType='submit'
					type='primary'
					className='auth__button'
					loading={isSubmitting}
				>
					Войти
				</Button>
			</div>
		</div>
	)
}
