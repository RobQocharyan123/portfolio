import React from 'react';
import "./Home.css";
import Typed from 'react-typed';


export const Home = () => {
  return (
    <div className='home'>
       
      <div className='text'>
        <div className='static_text'>
            I'm  Robert Qocharyan
        </div>
            
            <Typed 
            strings={
              [
                'FrontEnd Developer...',
                'Freelancer...',
                'Designer...'
              ]
            }
            typeSpeed={80}
            loop
             />
      </div>
      
    </div>
  )
}
