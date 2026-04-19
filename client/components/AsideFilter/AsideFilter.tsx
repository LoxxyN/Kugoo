import { FilterPriceSlider, AsideAds, FilterCheckboxes } from '@components/index'
import './AsideFilter.css'


export const AsideFilter = () => {
	return (
		<aside>
			<div className='filter'>
				<FilterPriceSlider />
				<FilterCheckboxes />
			</div>

			<AsideAds />
		</aside>
	)
}
