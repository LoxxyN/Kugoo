import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '@utils/index'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import './AuthForm.css'

type LoginFormData = z.infer<typeof loginFormSchema>

export const LoginForm = ({
	handleWindowChange,
	onLogin,
}: {
	handleWindowChange: () => void
	onLogin: (data: LoginFormData) => void
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (data: LoginFormData) => onLogin(data)

	return (
		<div className='auth__window'>
			<h2 className='auth__heading'>Вход</h2>
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
				</div>

				<div className='mt-2 text-center'>
					<span
						tabIndex={0}
						onClick={handleWindowChange}
						className='form__change-enter'
					>
						Зарегистрироваться
					</span>
				</div>
			</Form>

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
