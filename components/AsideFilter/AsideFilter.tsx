import { FilterPriceSlider } from '@components/index'
import './AsideFilter.css'

export const AsideFilter = () => {
	return (
		<aside>
			<div className='filter'>
				<FilterPriceSlider />
			</div>
			<div className='side-ads'>
				<div className='side-ads__product-of-month'>
					<h3>🔥 Товар месяца</h3>
					<hr />
					<div className='side-ads__product-of-month-info'>
						<div className='side-ads__product-of-month-block'>
							<img
								src='/images/scooter.svg'
								alt='scooter'
								height={61}
								width={61}
							/>
						</div>
						<div className='side-ads__product-of-month-description'>
							<span>Kugoo Kirin M4</span>
							<p>29 900₽</p>
						</div>
					</div>
				</div>

				<div className='side-ads__call-to-manager'>
					<p>Задать вопрос менеджеру</p>
				</div>
			</div>
		</aside>
	)
}
