import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/hnm.png'
import HeaderSocials from './HeaderSocials'
import { useLanguage } from '../../LanguageContext'

import { FiSun, FiMoon } from 'react-icons/fi'

const Header = ({ theme, toggleTheme, language, changeLanguage }) => {
  const { t } = useLanguage();
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>{t('hello')}</h5>
        <h1>TUYISUNGE Epaphrodis</h1>
        <h5 className='text-light'>{t('role')}</h5>
        <CTA />
        <HeaderSocials/>

        <div className="header__theme-lang">
          <button className="header__theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <div className="header__language-selector">
            <select value={language} onChange={(e) => changeLanguage(e.target.value)} aria-label="Change Language">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll__down'>{t('scrollDown')}</a>
      </div>
    </header>
  )
}

export default Header