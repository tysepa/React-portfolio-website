import React from 'react'
import CV from "../../assets/TUYISUNGE Epaphrodis.pdf"
import { useLanguage } from '../../LanguageContext'

const CTA = () => {
  const { t } = useLanguage();
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >{t('downloadCv')}</a>
        <a href='#contact' className='btn btn-primary'>{t('letsTalk')}</a>
    </div>
  )
}

export default CTA