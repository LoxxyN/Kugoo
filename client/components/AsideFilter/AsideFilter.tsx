import { FilterPriceSlider, AsideAds } from '@components/index'
import './AsideFilter.css'

export const AsideFilter = () => {
	return (
		<aside>
			<div className='filter'>
				<FilterPriceSlider />
			</div>

			<AsideAds />
		</aside>
	)
}
