import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rocio-galvan/" target="blank" rel="noreferrer"><ImLinkedin/></a>
      <a href="https://github.com/Ro-Galvan" target="_blank" rel="noreferrer"><ImGithub/></a>

    </div>
  )
}
