import React from 'react';
import "./About.css";
import personalimg from "../../assets/i.png"

export const About = () => {
  return (
    <div className='about'>
      <div className='person'>
        <div className='personal_info'>
          <div className='personal_one'>
            <div className='personal_img'>
              <img src={personalimg}alt="" />
            </div>
            <div className='introducion'>
              <ul>
                <li> <span>Name:</span> Robert Qocharyan</li>
                <li><span>Profile:</span> FrontEnd developer</li>
                <li><span>Email:</span> <a href="https://e.mail.ru/compose/">robkocharyan20@gmail.com</a></li>
                <li><span>Phone:</span> (+374) 94-381-555</li>
              </ul>
            </div>
          </div>

          <div className="personal_two">
              <h1>Skill</h1>

              <li><h3>HTML 90%</h3>
                <span className='bar'><span className='html'></span></span>
              </li>
              <li><h3>CSS 90%</h3>
                <span className='bar'><span className='css'></span></span>
              </li>
              <li><h3>JavaScript 80%</h3>
                <span className='bar'><span className='js'></span></span>
              </li>
              <li><h3>TypeScript 60%</h3>
                <span className='bar'><span className='typescript'></span></span>
              </li>
              <li><h3>React 80%</h3>
                <span className='bar'><span className='react'></span></span>
              </li>
              <li><h3>Redux 70%</h3>
                <span className='bar'><span className='redux'></span></span>
              </li>
              <li><h3>Tailwind CSS 30%</h3>
                <span className='bar'><span className='tailwind'></span></span>
              </li>
              <li><h3>Alpine JS 20%</h3>
                <span className='bar'><span className='alpin'></span></span>
              </li>
              
              <li><h3>Git 70%</h3>
                <span className='bar'><span className='git'></span></span>
              </li>
              <li><h3>Bootstrap 40%</h3>
                <span className='bar'><span className='bootstrap'></span></span>
              </li>

            
          </div>
        </div>
        <div className='about_info'>
          <h1>About me</h1>
          <div className='about_text'>
          <p>I am a FrontEd developer.  A self-motivated, reliable, responsible, and hardworking person.  I can work independently and in groups. I am good at communicating and collaborating. I am creative and always up for  challenges! I am organized because I always plan my day to make sure that I complete all of my tasks on schedule. In my spare time, I enjoy listening to music, watching movies, and reading books related to my profession.</p>
          
          </div>
        </div>
      </div>
    </div>
  )
}
