import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter } from 'react-icons/io'
import { useLanguage } from '../../LanguageContext'


const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer >
      <a href="#home" className='footer__logo'>Epaphrodis</a>
      <ul className='permalinks'>
        <li><a href="#home">{t('homeLink')}</a></li>
        <li><a href="#about">{t('aboutLink')}</a></li>
        <li><a href="#experience">{t('experienceLink')}</a></li>
        <li><a href="#services">{t('servicesLink')}</a></li>
        <li><a href="#portfolio">{t('portfolioLink')}</a></li>
        <li><a href="#testimonial">{t('testimonialsLink')}</a></li>
        <li><a href="#contact">{t('contactLink')}</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com/tysbraddy" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://x.com/MarayikaE47722" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>
      
      <div className="footer__copyright">
        <small>{t('copyright')}</small>
      </div>
    </footer>
  )
}

export default Footer