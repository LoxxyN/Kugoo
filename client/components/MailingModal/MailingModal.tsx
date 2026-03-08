import {
	GoogleMailIcon,
	OutlookMailIcon,
	YahooMailIcon,
	YandexMailIcon,
} from '@icons/index'
import { IModalProps } from '@interfaces/index'
import { Modal } from 'antd'
import './MailingModal.css'

export const MailingModal = ({ isModalOpen, handleClose }: IModalProps) => {
	return (
		<Modal
			className='modal'
			open={isModalOpen}
			onCancel={handleClose}
			closable={{ 'aria-label': 'Custom Close Button' }}
			cancelButtonProps={{ hidden: true }}
			okButtonProps={{ hidden: true }}
		>
			<div className='modal__heading'>
				<h2>Благодарим за подписку на рассылку</h2>
				<p>
					Перейдите в свою почту, чтобы подтвердить подписку и получить
					видеообзор «Топ-3 электросамоката 2021г.»
				</p>
				<span>Выберите свой почтовый сервис</span>
			</div>
			<div className='mailing-modal__mail-list'>
				<button>
					<GoogleMailIcon />
				</button>
				<button>
					<YandexMailIcon />
				</button>
				<button>
					<OutlookMailIcon />
				</button>
				<button>
					<YahooMailIcon />
				</button>
			</div>

			<p>
				Если письма не во входящих, проверьте папку «Промоакции» или «Спам».
				Письмо могло попасть туда по ошибке.
			</p>
		</Modal>
	)
}
