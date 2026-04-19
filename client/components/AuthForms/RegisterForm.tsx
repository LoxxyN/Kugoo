import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from '@utils/index'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import './AuthForm.css'

type RegisterFormData = z.infer<typeof registerFormSchema>

export const RegisterForm = ({
	onRegister,
	handleWindowChange,
}: {
	onRegister: (data: RegisterFormData) => void
	handleWindowChange: () => void
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		mode: 'onChange',
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = (data: RegisterFormData) => onRegister(data)

	return (
		<div className='auth__window'>
			<h2 className='auth__heading'>Регистрация</h2>
			<Form
				id='auth__form'
				autoComplete='off'
				onFinish={handleSubmit(onSubmit)}
			>
				<div className='form__inputs'>
					<Controller
						control={control}
						name='email'
						render={({ field }) => (
							<Form.Item
								className='form__input-block'
								label='Почта'
								layout='vertical'
								validateStatus={errors.email ? 'error' : ''}
								help={errors.email?.message}
							>
								<Input
									{...field}
									className='form__input-field'
									placeholder='Введите email'
								/>
							</Form.Item>
						)}
					/>

					<Controller
						control={control}
						name='password'
						render={({ field }) => (
							<Form.Item
								className='form__input-block'
								label='Пароль'
								layout='vertical'
								validateStatus={errors.password ? 'error' : ''}
								help={errors.password?.message}
							>
								<Input
									{...field}
									className='form__input-field'
									id='password'
									placeholder='Введите пароль'
									type='password'
								/>
							</Form.Item>
						)}
					/>

					<Controller
						control={control}
						name='confirmPassword'
						render={({ field }) => (
							<Form.Item
								className='form__input-block'
								label='Повторите пароль'
								layout='vertical'
								validateStatus={errors.confirmPassword ? 'error' : ''}
								help={errors.confirmPassword?.message}
							>
								<Input
									{...field}
									className='form__input-field'
									id='confirmPassword'
									placeholder='Повторите пароль'
									type='password'
								/>
							</Form.Item>
						)}
					/>
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
			</Form>

			<div className='flex mt-8 justify-center'>
				<Button
					tabIndex={0}
					form='auth__form'
					type='primary'
					disabled={!isValid}
					className='auth__button'
					loading={isSubmitting}
				>
					Регистрация
				</Button>
			</div>
		</div>
	)
}
