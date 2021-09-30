import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import './header-styles.css'
import { useGlobalContext } from '../../context'

const Header = () => {
  const { data } = useGlobalContext()
  const refContainer = useRef(null)

  useEffect(() => {
    document.addEventListener('scroll', function () {
      if (
        window.scrollY > refContainer.current.getBoundingClientRect().height
      ) {
        refContainer.current.classList.add('scrolled')
      } else {
        refContainer.current.classList.remove('scrolled')
      }
    })
  }, [])

  return (
    <header ref={refContainer} className='main-header'>
      <div className='logo'>
        <img src={data.images.logo} alt='Header logo' />
      </div>
      <Nav />
    </header>
  )
}

export default Header
