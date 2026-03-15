import { TSkeletonClassName, TSkeletonSize } from '@interfaces/index'
import { cn } from '@utils/index'

const preloadCards = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
]

const preloadProductImages = [
	{ id: 1, src: '/images/scooter.svg' },
	{ id: 2, src: '/images/scooter.svg' },
	{ id: 3, src: '/images/scooter.svg' },
	{ id: 4, src: '/images/scooter.svg' },
	{ id: 5, src: '/images/scooter.svg' },
	{ id: 6, src: '/images/scooter.svg' },
	{ id: 7, src: '/images/scooter.svg' },
]

const skeletonColor = 'bg-neutral-200 animate-pulse'

const CardSkeleton = ({ className }: TSkeletonClassName) => {
	if (typeof className === 'undefined') return
	return <div className={cn(skeletonColor, className)}></div>
}

const CardListSkeleton = ({ className }: TSkeletonClassName) => {
	return (
		<div className={className}>
			{preloadCards.map(item => (
				<CardSkeleton className='rounded-[10px] w-60 h-[450px]' key={item.id} />
			))}
		</div>
	)
}

const ProductImageSkeleton = ({ size }: TSkeletonSize) => {
	return (
		<div
			className={cn(
				skeletonColor,
				size === 'small'
					? 'h-[73px] w-[73px] rounded-sm'
					: 'w-[570px] h-[480px] rounded-[10px]',
			)}
		></div>
	)
}

const ProductImageListSkeleton = () => {
	return (
		<div className='flex flex-wrap gap-2.5'>
			{preloadProductImages.map(item => (
				<ProductImageSkeleton key={item.id} size='small' />
			))}
		</div>
	)
}

const ProductImagesLayoutSkeleton = () => {
	return (
		<div className='flex flex-col gap-y-3'>
			<ProductImageSkeleton size='large' />
			<ProductImageListSkeleton />
		</div>
	)
}

const TitleSkeleton = ({ className }: TSkeletonClassName) => {
	if (typeof className === 'undefined') return

	return <div className={cn(skeletonColor, `w-full rounded-full`, className)} />
}

const BlockSkeleton = ({ className }: TSkeletonClassName) => {
	if (typeof className === 'undefined') return

	return <div className={cn(skeletonColor, `w-full rounded-xl`, className)} />
}

const ProductDescriptionLayoutSkeleton = () => {
	return (
		<div className='flex flex-col gap-y-5 px-4 w-full'>
			<TitleSkeleton className='h-6' />
			<TitleSkeleton className='h-6' />
			<TitleSkeleton className='h-6' />
			<BlockSkeleton className='h-32' />
			<TitleSkeleton className='h-6' />
			<BlockSkeleton className='h-32' />
			<TitleSkeleton className='h-6' />
			<BlockSkeleton className='h-32' />
		</div>
	)
}

export {
	BlockSkeleton,
	CardListSkeleton,
	CardSkeleton,
	ProductDescriptionLayoutSkeleton,
	ProductImagesLayoutSkeleton,
	TitleSkeleton,
}
