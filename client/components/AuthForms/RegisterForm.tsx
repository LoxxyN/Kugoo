import { zodResolver } from '@hookform/resolvers/zod'
import { cn, emailSchema, passwordSchema } from '@utils/index'
import { Button } from 'antd'
import { useForm } from 'react-hook-form'
import z from 'zod'
import './AuthForm.css'

const registerFormSchema = z
	.object({
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

type RegisterFormData = z.infer<typeof registerFormSchema>

export const RegisterForm = ({
	onRegister,
	handleWindowChange,
}: {
	onRegister: (data: RegisterFormData) => void
	handleWindowChange: () => void
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = (data: RegisterFormData) => {
		onRegister(data)
		//Переброс после регистрации на окно входа
		if (isSubmitted === true) {
			handleWindowChange()
		}
	}

	return (
		<div className='auth__window'>
			<h2 className='auth__heading'>Регистрация</h2>
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

					<div className='form__input-block'>
						<label htmlFor='confirmPassword'>Повторите пароль</label>
						<div className='form__input'>
							<input
								{...register('confirmPassword')}
								className={cn(
									'form__input-field',
									errors.confirmPassword ? 'form__input-field--error' : '',
								)}
								id='confirmPassword'
								placeholder='Повторите пароль'
								type='password'
							/>
							{errors.confirmPassword && (
								<span className='form__input-error'>
									{errors.confirmPassword.message}
								</span>
							)}
						</div>
					</div>
				</div>

				<div className='mt-2 text-center'>
					<span
						tabIndex={0}
						onClick={handleWindowChange}
						className='form__change-enter'
					>
						Уже есть аккаунт?
					</span>
				</div>
			</form>

			<div className='flex mt-8 justify-center'>
				<Button
					tabIndex={0}
					form='auth__form'
					htmlType='submit'
					type='primary'
					className='auth__button'
					loading={isSubmitting}
				>
					Регистрация
				</Button>
			</div>
		</div>
	)
}
