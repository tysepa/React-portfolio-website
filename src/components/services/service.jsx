import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
import { useLanguage } from '../../LanguageContext'

const Services = () => {
  const { t } = useLanguage();
  
  const uiuxItems = t('uiuxItems');
  const webItems = t('webItems');
  const itItems = t('itItems');

  return (
    <section id='services'>
      <h5>{t('servicesSub')}</h5>
      <h2>{t('servicesTitle')}</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>{t('uiuxTitle')}</h3>
          </div>
          <ul className='service__list'>
            {Array.isArray(uiuxItems) && uiuxItems.map((item, idx) => (
              <li key={idx}>
                <BiCheck className='service__list-icon'/>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* End of UI/UX Design */}
        
        <article className='service'>
          <div className="service__head">
            <h3>{t('webTitle')}</h3>
          </div>
          <ul className='service__list'>
            {Array.isArray(webItems) && webItems.map((item, idx) => (
              <li key={idx}>
                <BiCheck className='service__list-icon'/>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* End of Web Development */}
        
        <article className='service'>
          <div className="service__head">
            <h3>{t('itTitle')}</h3>
          </div>
          <ul className='service__list'>
            {Array.isArray(itItems) && itItems.map((item, idx) => (
              <li key={idx}>
                <BiCheck className='service__list-icon'/>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services