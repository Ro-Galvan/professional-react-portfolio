import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    // using sementaic tags 
    <header>
      {/* Used BEM naming convention of Block, Element, Modifier  */}
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Rocio Galvan</h1>
      <h5 className="text-light">Full-stack Developer</h5>
      <CTA />
      <HeaderSocials />
      
      <div className="me">
        <img src={ME} alt="pictureOfRocio" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
