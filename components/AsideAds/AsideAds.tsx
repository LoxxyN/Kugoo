import { AsideAdsProductOfMonth } from './AsideAdsProductOfMonth/AsideAdsProductOfMonth'
import './AsideAds.css'

export const AsideAds = () => {
  return (
    <div className='side-ads'>
      <AsideAdsProductOfMonth />

      <div className='side-ads__call-to-manager'>
        <p>Задать вопрос менеджеру</p>
      </div>
    </div>
  )
}