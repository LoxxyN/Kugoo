import { BlockSkeleton, CallTellModal } from '@components/index'
import { useModalStore } from '@store/index'
import { modalTexts } from '@utils/index'
import { lazy, Suspense } from 'react'
import './AsideAds.css'

const AsideAdsProductOfMonth = lazy(
	() => import('./AsideAdsProductOfMonth/AsideAdsProductOfMonth'),
)

export const AsideAds = () => {
	const {
		handleCallManagerModalClose,
		handleCallManagerModalOpen,
		isCallManagerModalOpen,
	} = useModalStore()

	return (
		<div className='side-ads'>
			<Suspense fallback={<BlockSkeleton className='h-36' />}>
				<AsideAdsProductOfMonth />
			</Suspense>

			<>
				<div
					className='side-ads__call-to-manager'
					onClick={handleCallManagerModalOpen}
				>
					<p>Задать вопрос менеджеру</p>
				</div>
				<CallTellModal
					{...modalTexts[1]}
					isModalOpen={isCallManagerModalOpen}
					handleClose={handleCallManagerModalClose}
				/>
			</>
		</div>
	)
}
