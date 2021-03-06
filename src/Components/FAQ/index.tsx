import React from 'react'
import { useGlobalContext } from '../../context'
import './faq-styles.css'
import FaqItem from './FaqItem'

const Faq = () => {
  const { data } = useGlobalContext()

  return (
    <section className='faq' id='faq'>
      <div className='container'>
        <h3 className='section-title'>{data.faq.title}</h3>
        <p className='section-desc'>{data.faq.desc}</p>
        <div className='faq-list'>
          {data.faqItems.map((item) => {
            return <FaqItem key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
