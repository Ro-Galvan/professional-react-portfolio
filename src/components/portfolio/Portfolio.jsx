import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/regex.jpg'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* Project 1 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt="regex tutorial" />
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="http://TBD.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
        </article>
         {/* Project 2 */}
         <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt="regex tutorial" />
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="http://TBD.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
        </article>
         {/* Project 3 */}
         <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt="regex tutorial" />
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="http://TBD.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}
