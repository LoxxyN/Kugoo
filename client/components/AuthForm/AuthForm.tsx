import { Button, Input } from 'antd'
import { forwardRef } from 'react'

export const AuthForm = forwardRef<
	HTMLFormElement,
	{
		isRegisterForm: boolean
		handleWindowChange: () => void
		sendRegisterForm: () => void
		sendLoginForm: () => void
	}
>(
	(
		{ isRegisterForm, handleWindowChange, sendRegisterForm, sendLoginForm },
		ref,
	) => {
		const onSubmitForm = (e: React.FormEvent) => {
			e.preventDefault()
			if (isRegisterForm) {
				sendRegisterForm()
			} else {
				sendLoginForm()
			}
		}

		return (
			<div className='auth__window'>
				<h2 className='auth__heading'>
					{isRegisterForm ? 'Регистрация' : 'Вход'}
				</h2>
				<form ref={ref} className='auth__form' onSubmit={onSubmitForm}>
					<div className='form__inputs'>
						<div className='form__input-block'>
							<label htmlFor='email'>Почта</label>
							<Input
								className='form__input'
								id='auth_email'
								name='auth_email'
								placeholder='Введите email'
								variant='outlined'
							/>
						</div>
						<div className='form__input-block'>
							<label htmlFor='password'>Пароль</label>
							<Input.Password
								className='form__input'
								id='auth_password'
								name='auth_password'
								placeholder='Введите пароль'
								variant='outlined'
								visibilityToggle={true}
							/>
						</div>
					</div>

					<div className='mt-2'>
						<span onClick={handleWindowChange} className='form__change-enter'>
							{isRegisterForm ? 'Уже есть аккаунт?' : 'Создать аккаунт'}
						</span>
					</div>

					<div className='flex mt-8 justify-center'>
						<Button htmlType='submit' type='primary' className='auth__button'>
							{isRegisterForm ? 'Регистрация' : 'Вход'}
						</Button>
					</div>
				</form>
			</div>
		)
	},
)
