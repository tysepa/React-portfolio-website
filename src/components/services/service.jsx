import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing high-fidelity web and mobile-based user interfaces with Figma.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Translating wireframes and design files into pixel-perfect HTML/CSS layouts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Iterating on user flows and interactive prototypes to enhance usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating and editing professional graphic assets with Photoshop and Illustrator.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing modern design standards with a focus on responsive layouts.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}
        <article className='service'>
          <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building scalable and dynamic frontend applications using React.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing robust server-side logic and backend APIs using Node.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating third-party APIs and managing relational/non-relational databases.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing automated unit and integration tests using Mocha, Chai, and Jest.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborating with design teams to code interactive and responsive components.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintaining clean codebase architecture and deploying to cloud environments.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className='service'>
          <div className="service__head">
          <h3>IT Support & Networking</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Installing and configuring Operating Systems and desktop applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshooting computer hardware issues and performing system maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Setting up and maintaining Local Area Networks (LAN) and printer networks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitoring control cameras, multimedia hardware, and setting up conference hall cabling.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performing regular software updates and general IT infrastructure checkups.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default service