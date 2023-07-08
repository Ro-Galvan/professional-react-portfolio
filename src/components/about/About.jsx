// you can type rafce to get template
import React from 'react'
import './about.css'
import {MdWork} from 'react-icons/md'
import {FaJava} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
{/* add div if you want to add images later on */}

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Work Experience</h5>
              <small> 10+ years</small>
            </article>
            <article className='about__card'>
              <SiJavascript className='about__icon'/>
              <h5>JavaScript</h5>
              <small> 1 year</small>
            </article>
            <article className='about__card'>
              <FaJava className='about__icon'/>
              <h5>Java</h5>
              <small> &lt;1 year</small>
            </article>
          </div>
          <br />
          <p>
          Career transitioning professional with fast-paced logistics, people management, and customer-oriented experience.
          </p>

          <br />
          <p>
            My interest in web development started in 2018 when I was living in Australia. I was looking for things to do in my spare time and came across an intro to coding course through General Assembly. It was a short one night course but I was so intrigued and wished I had the funds to take the full course. It took many years for that wish to come true but in 2022 I made it happen! I switched careers from logistics and so far have three certificates in full-stack and back-end development.
            </p>   
        </div>
      </div>
    </section>
  )
}

export default About