import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
// import {GiBrain} from 'react-icons/gi'
import {FaBookOpen} from 'react-icons/fa'
// import {MdEmail} from 'react-icons/md'
// use useState if you want to implement active feature on nav bar-- 1:18
import { useState } from 'react'

export default function Nav() {
  // didn't finish the active or not feature
  // const [activeNav, setActiveNav] = useState ('#');
  return (
    <nav>
      <a href="#" className='active'><AiFillHome/></a>
      <a href="#about"><FaUser/></a>
      {/* <a href="#skills"><GiBrain/></a> */}
      <a href="#portfolio"><FaBookOpen/></a>
      {/* <a href="#contact"><MdEmail/></a> */}
    </nav>
  )
}