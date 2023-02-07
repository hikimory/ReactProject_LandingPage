import React from 'react'
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: 'Shata Walle',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam minus rerum enim facere? Adipisci earum corporis repudiandae, harum aliquid fugiat repellendus neque sunt vero reprehenderit omnis perferendis, assumenda aperiam.'
  },
  {
    avatar: AVTR2,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam minus rerum enim facere? Adipisci earum corporis repudiandae, harum aliquid fugiat repellendus neque sunt vero reprehenderit omnis perferendis, assumenda aperiam.'
  },
  {
    avatar: AVTR3,
    name: 'Andrew Hix',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam minus rerum enim facere? Adipisci earum corporis repudiandae, harum aliquid fugiat repellendus neque sunt vero reprehenderit omnis perferendis, assumenda aperiam.'
  },
  {
    avatar: AVTR4,
    name: 'Shata Walle',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam minus rerum enim facere? Adipisci earum corporis repudiandae, harum aliquid fugiat repellendus neque sunt vero reprehenderit omnis perferendis, assumenda aperiam.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Client Avatar" />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials