import React from 'react'
import './about.css' 
import Me from '../../assets/home.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
import { useLanguage } from '../../LanguageContext'

const About = () => {
  const { t } = useLanguage();
  return (
    <section id='about'>
      <h5>{t('aboutSub')}</h5>
      <h2>{t('aboutTitle')}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={Me} alt='' className='me-ab'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
             <FaAward className='about__icon'/>
             <h5>{t('expTitle')}</h5>
             <small>{t('expSub')}</small>
            </article>

            <article className='about__card'>
             <FiUsers className='about__icon'/>
             <h5>{t('clientsTitle')}</h5>
             <small>{t('clientsSub')}</small>
            </article>

            <article className='about__card'>
             <VscFolderLibrary className='about__icon'/>
             <h5>{t('projectsTitle')}</h5>
             <small>{t('projectsSub')}</small>
            </article>
          </div>
          <p>
            {t('aboutPara')}
          </p>
           <a href="#contact" className='btn btn-primary'>{t('letsTalk')}</a>

        </div>
      </div>
      
    </section>
  )
}

export default About

