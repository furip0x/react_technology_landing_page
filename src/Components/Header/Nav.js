import React, { useState } from 'react'
import { useGlobalContext } from '../../context'

const Nav = () => {
  const { data } = useGlobalContext()
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const toggleMenu = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  }

  return (
    <nav className='main-nav'>
      <ul className={isMobileNavVisible ? 'visible' : null}>
        {data.nav.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url} className='main-nav-link'>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <div
        className={`hamburger-menu ${isMobileNavVisible ? 'toggled' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Nav
