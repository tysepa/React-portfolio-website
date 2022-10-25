import React from 'react'
import './testimonial.css'
import AVTR1 from "./../../assets/avatar.jpg"
import AVTR2 from "./../../assets/avatar1.jpg"
import AVTR3 from "./../../assets/avatar2.jpg"
import AVTR4 from "./../../assets/avatar3.jpg"

import { Navigation, Pagination, Scrollbar, Ally } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data =[
  {
    avatar: AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempore enim  consequuntur sapiente corporis tenetur quod! Magni placeat ab dolorem dolores accusamus maiores, nam assumenda doloremque repudiandae quia tenetur dignissimos.'
  },
  {
    avatar: AVTR2,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempore enim  consequuntur sapiente corporis tenetur quod! Magni placeat ab dolorem dolores accusamus maiores, nam assumenda doloremque repudiandae quia tenetur dignissimos.'
  },
  {
    avatar: AVTR3,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempore enim  consequuntur sapiente corporis tenetur quod! Magni placeat ab dolorem dolores accusamus maiores, nam assumenda doloremque repudiandae quia tenetur dignissimos.'
  },
  {
    avatar: AVTR4,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempore enim  consequuntur sapiente corporis tenetur quod! Magni placeat ab dolorem dolores accusamus maiores, nam assumenda doloremque repudiandae quia tenetur dignissimos.'
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
              <img src={avatar} />
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