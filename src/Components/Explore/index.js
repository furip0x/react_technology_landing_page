import React from 'react'
import './explore-styles.css'
import { useGlobalContext } from '../../context'

const Explore = () => {
  const { data } = useGlobalContext()

  return (
    <section
      className='explore'
      style={{
        backgroundImage: `url(${data.explore.img})`,
      }}
    >
      <div className='container'>
        <div className='explore-text'>
          <h4 className='explore-title'>{data.explore.title}</h4>
          <p className='explore-desc'>{data.explore.desc}</p>
          <a href={data.explore.link} className='explore-link'>
            {data.explore.linkText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Explore
