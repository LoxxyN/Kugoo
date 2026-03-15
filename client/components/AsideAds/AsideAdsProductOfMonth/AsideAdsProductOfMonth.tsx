import './AsideAdsProductOfMonth.css'

const AsideAdsProductOfMonth = () => {
	return (
		<div className='side-ads__product-of-month'>
			<h3>🔥 Товар месяца</h3>
			<hr />
			<div className='side-ads__product-of-month-info'>
				<div className='side-ads__product-of-month-block'>
					<img src='/images/scooter.svg' alt='scooter' height={61} width={61} />
				</div>

				<div className='side-ads__product-of-month-description'>
					<span>Kugoo Kirin M4</span>
					<p>29 900₽</p>
				</div>
			</div>
		</div>
	)
}

export default AsideAdsProductOfMonth
