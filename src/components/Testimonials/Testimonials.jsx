import React from 'react'
import styled from 'styled-components'
import TesimonialList from './TestimonialList'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <TestimonialsSection id='testimonials'>
      <h5>Reviews from people I've worked with</h5>
      <h2>Testimonials</h2>
      <Swiper className='container TestimonialContainer'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          TesimonialList.map(({avatar, name, linkedin, role, review}, index) => {
            return (
            <SwiperSlide className="Testimonial" key={index}>
              <ClientAvatar>
                <ClientLink href={linkedin} aria-label={'View' + ' ' + [name] + 's' + ' ' + 'LinkedIn Profile'} target="_blank">
                  <ClientImage src={avatar} loading="lazy" alt={name} />
                </ClientLink>
              </ClientAvatar>
              <ClientName href={linkedin} aria-label={'View' + ' ' + [name] + 's' + ' ' + 'LinkedIn Profile'} target="_blank">{name}</ClientName>
              <ClientRole>{role}</ClientRole>
              <ClientReview>{review}</ClientReview>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </TestimonialsSection>
  )
}

export default Testimonials

const TestimonialsSection = styled.section``
const ClientLink = styled.a`
  display: block;
`
const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`
const ClientImage = styled.img``
const ClientName = styled.a`
  display: block;
  font-size: 0.83em;
  font-weight: 500;
  color: var(--color-primary);
`
const ClientRole = styled.h5`
  color: var(--color-white);
`
const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`