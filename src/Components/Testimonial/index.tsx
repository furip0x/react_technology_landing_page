import React from 'react'
import TestimonialItem from './TestimonialItem'
import { useGlobalContext } from '../../context'
import './testimonial-styles.css'

const Testimonial = () => {
  const { data } = useGlobalContext()

  return (
    <section className='testimonials' id='testimonials'>
      <div className='container'>
        <h3 className='section-title'>{data.testimonial.title}</h3>
        <p className='section-desc'>{data.testimonial.desc}</p>
        <TestimonialItem />
      </div>
    </section>
  )
}

export default Testimonial
