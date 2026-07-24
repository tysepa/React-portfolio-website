import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/hnm.png'
import HeaderSocials from './HeaderSocials'
import { useLanguage } from '../../LanguageContext'

const Header = () => {
  const { t } = useLanguage();
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>{t('hello')}</h5>
        <h1>TUYISUNGE Epaphrodis</h1>
        <h5 className='text-light'>{t('role')}</h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll__down'>{t('scrollDown')}</a>
      </div>
    </header>
  )
}

export default Header