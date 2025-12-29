export const CarouselContent = () => {
	return (
		<>
			<div className='hero__content'>
				<div className='hero__heading'>
					<div className='hero__heading-badge'>Новинка</div>
					<h1>
						Электросамокаты Kugoo Kirin <br /> от официального дилера
					</h1>
					<p>с бесплатной доставкой по РФ от 1 дня</p>
					<button type='button' className='button-white'>
						Перейти в каталог
					</button>
				</div>
				<div className='hero__image'>
					<img
						src='/images/hero-scooter.svg'
						alt='hero-scooter'
						width={538}
						height={405}
					/>
				</div>
			</div>
		</>
	)
}
