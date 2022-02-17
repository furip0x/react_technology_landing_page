import React from 'react'
import './banner-styles.css'
import Video from '../../Assets/videos/vr-video.mp4'
import { useGlobalContext } from '../../context'

const Banner = () => {
  const { data } = useGlobalContext()

  return (
    <section className='banner' id='banner'>
      <video src={Video} autoPlay muted loop></video>
      <div className='container'>
        <div className='banner-subtitle'>
          <span>{data.banner.subtitleText1}</span> {data.banner.subtitleText2}
        </div>
        <h2 className='banner-title'>{data.banner.title}</h2>
        <a href='#about' type='button' className='banner-link'>
          {data.banner.btnText}
        </a>
      </div>
    </section>
  )
}

export default Banner
