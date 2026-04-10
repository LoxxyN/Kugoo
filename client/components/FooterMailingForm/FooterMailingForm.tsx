import { MailingModal } from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNotifications } from '@hooks/index'
import { useModalStore } from '@store/index'
import { emailSchema } from '@utils/index'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import './FooterMailingForm.css'

export const FooterMailingForm = () => {
	const { isMailModalOpen, handleMailModalOpen, handleMailModalClose } =
		useModalStore()
	const { mailingMessages } = useNotifications()

	const emailFormSchema = z.object({
		email: emailSchema,
	})

	type TMailingModal = z.infer<typeof emailFormSchema>

	const {
		control,
		reset,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<TMailingModal>({
		resolver: zodResolver(emailFormSchema),
		defaultValues: {
			email: '',
		},
		mode: 'onSubmit',
	})

	const onFinish = () => {
		mailingMessages.mailingComplete()
		reset()
	}

	const onFinishFailed = () => {
		mailingMessages.mailingFailed()
	}

	const handleCallModal = () => {
		if (isValid) {
			handleMailModalOpen()
		}
	}

	return (
		<>
			<Form
				onFinish={handleSubmit(onFinish)}
				onFinishFailed={onFinishFailed}
				className='mailing-form'
				variant='filled'
			>
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<Form.Item
							validateStatus={errors.email ? 'error' : ''}
							help={errors.email?.message}
							required
						>
							<Input
								{...field}
								placeholder='Введите Ваш email'
								id='mailing_email'
								type='email'
							/>
						</Form.Item>
					)}
				></Controller>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='button-white h-14'
						onClick={handleCallModal}
					>
						Подписаться
					</Button>
				</Form.Item>

				<MailingModal
					isModalOpen={isMailModalOpen}
					handleClose={handleMailModalClose}
				/>
			</Form>
		</>
	)
}
