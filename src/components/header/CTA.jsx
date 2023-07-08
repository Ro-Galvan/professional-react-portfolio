import React from 'react'
// assests folder needs to be under src - Relative imports outside of src/ are not supported. Either would have to addd href and not import it
import CV from '../../assets/Rocio Galvan - Full Stack Developer Resume.docx.pdf'


export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Resume</a>
      {/* <a href="#contact" className='btn btn-primary'>Reach out</a> */}
    </div>
  )
}
