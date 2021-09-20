import React, { useEffect, useRef } from 'react'
import './footer-styles.css'
import { useGlobalContext } from '../../context'

const Footer = () => {
  const { data } = useGlobalContext()
  const refContainer = useRef(null)

  useEffect(() => {
    const setBodyPadding = () => {
      const body = document.querySelector('body')
      const footerHeight = refContainer.current.getBoundingClientRect().height

      body.style.paddingBottom = `${footerHeight}px`
    }

    window.addEventListener('load', setBodyPadding)
    window.addEventListener('resize', setBodyPadding)
  }, [])
  return (
    <footer ref={refContainer} className='main-footer'>
      <img loading='lazy' src={data.images.logoIcon} alt='Footer logo' />
      <p>
        <span>
          Developed by
          <a
            href='https://github.com/furip0x'
            title='furip0x github'
            target='_blank'
            rel='noreferrer'
          >
            furip0x.
          </a>
        </span>
        <span>
          Video by
          <a
            href='https://mixkit.co/'
            title='Mixkit'
            target='_blank'
            rel='noreferrer'
          >
            Mixkit
          </a>
        </span>
      </p>
    </footer>
  )
}

export default Footer
