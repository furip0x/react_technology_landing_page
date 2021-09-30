import React from 'react'
import { useGlobalContext } from '../../context'

const Features = () => {
  const { data } = useGlobalContext()

  return (
    <section className='features'>
      {data.features.map((item) => {
        return (
          <div key={item.id} className='feature-item'>
            <div className='feature-icon'>
              <img src={item.icon} alt='feature icon' />
            </div>
            <h3 className='feature-title'>{item.title}</h3>
          </div>
        )
      })}
    </section>
  )
}

export default Features
