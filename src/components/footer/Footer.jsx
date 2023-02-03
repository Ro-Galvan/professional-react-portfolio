import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'

export default function Footer() {
  return (
    <footer>
      <a href="/#" className='footer__logo'>ROCIO</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/rocio-galvan/" target="blank" rel="noreferrer"><ImLinkedin/></a>
      <a href="https://github.com/Ro-Galvan" target="_blank" rel="noreferrer"><ImGithub/></a>
      </div>
      {/* <div className="footer__copyright">

      </div> */}
    </footer>
  )
}
