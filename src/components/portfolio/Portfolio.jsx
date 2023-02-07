import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/openMeetingToolkit.jpg'
import IMG1 from '../../assets/openMeetingToolkit.png'
import IMG2 from '../../assets/hobbyBox.png'
import IMG3 from '../../assets/gameStore.jpg'
import IMG4 from '../../assets/group-project-cosmic-dust.jpg'

export default function Portfolio() {
  return (
    /* can put all projects into an array and dynamically display them in the future- 2:17 */
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* Project 1 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} width = "480" height = "430"alt="Open Meeting Toolkit" />
          </div>
          <h3>Open Meeting Toolkit</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Code-for-the-Carolinas/openmeetingtoolkit" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://code-for-the-carolinas.github.io/openmeetingtoolkit/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* Project 2 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="HobbyBox" />
          </div>
          <h3>HobbyBox</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jacksonnorris/hobby-box" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.awesomescreenshot.com/video/12952250?key=e5b7fe13e2dd60d4ab9af1a340520f97" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* Project 3 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} width = "480" height = "430" alt="Java Game Store App" />
          </div>
          <h3>Java Game Store App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Ro-Galvan/Store-App-Frontend" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com/Ro-Galvan/smu-student-project-1" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* Project 4 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} width = "480" height = "430" alt="Space Project" />
          </div>
          <h3>Space Project</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Ro-Galvan/International-Space-Station" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://magdalenaperry.github.io/nasa-space-things/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}
