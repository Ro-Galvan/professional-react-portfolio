import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
// import {GiBrain} from 'react-icons/gi'
import {FaBookOpen} from 'react-icons/fa'
// import {MdEmail} from 'react-icons/md'

export default function Nav() {
  return (
    <nav>
      <a href="#"><AiFillHome/></a>
      <a href="#about"><FaUser/></a>
      {/* <a href="#skills"><GiBrain/></a> */}
      <a href="#portfolio"><FaBookOpen/></a>
      {/* <a href="#contact"><MdEmail/></a> */}
    </nav>
  )
}