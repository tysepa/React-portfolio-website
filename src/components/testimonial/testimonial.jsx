import React from 'react'
import './testimonial.css'
import AVTR1 from "./../../assets/avatar.jpg"
import AVTR2 from "./../../assets/gregoire.JPG"
import AVTR3 from "./../../assets/mwibutsa.jpg"

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
    review:'Epaphrodis is an exceptional software developer and IT professional. His dedication to mastering Web Technologies was highly evident during his academic course at the University of Rwanda, demonstrating excellence in JavaScript, React, and Node.js.'
  },
  {
    avatar: AVTR2,
    name:'Mr. NSENGIYUMVA Grégoire',
    review:'During his time handling network setups and IT troubleshooting, Epaphrodis demonstrated great technical problem-solving skills and a strong commitment to quality. He is reliable, proactive, and highly professional.'
  },
  {
    avatar: AVTR3,
    name:'Mr. Mwibutsa Frolibert',
    review:'Epaphrodis is a talented full-stack developer with solid skills. His ability to translate complex design mockups into functional React applications and construct robust backend Node.js APIs is highly commendable.'
  }
]



const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{clickable: true}}
     
      >
      {
        data.map(({avatar,name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               { review}
              </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default testimonial