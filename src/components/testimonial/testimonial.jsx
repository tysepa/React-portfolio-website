import React from 'react'
import './testimonial.css'
import AVTR1 from "./../../assets/avatar.jpg"
import AVTR2 from "./../../assets/gregoire.JPG"
import AVTR3 from "./../../assets/mwibutsa.jpg"
import { useLanguage } from '../../LanguageContext'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data =[
  {
    avatar: AVTR1,
    name:'Mr. MUGABE N. Gabriel',
    reviewKey: 'mugabeReview'
  },
  {
    avatar: AVTR2,
    name:'Mr. NSENGIYUMVA Grégoire',
    reviewKey: 'gregoireReview'
  },
  {
    avatar: AVTR3,
    name:'Mr. Mwibutsa Frolibert',
    reviewKey: 'mwibutsaReview'
  }
]



const Testimonial = () => {
  const { t } = useLanguage();
  return (
    <section id='testimonial'>
      <h5>{t('testimonialSub')}</h5>
      <h2>{t('testimonialTitle')}</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{clickable: true}}
     
      >
      {
        data.map(({avatar, name, reviewKey}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {t(reviewKey)}
              </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial