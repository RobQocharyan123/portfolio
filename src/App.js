/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Services } from './Components/Services/Services';
import { Work } from './Components/Work/Work';
import React from "react";



function App() {
  let component;

  switch(window.location.pathname){
    case '/home':
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case '/services':
      component = <Services />;
      break;
    case "/work":
      component = <Work />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    default :
      break;
    
  }
  return (
    <div className="App">
        <Header />
        <div className='container'>
        {/* <div className='components'>
          <Home />
          <About />
          <Work />
          <Contact />
        </div> */}
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* <Route path='/services' element={<Services />} /> */}
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
       
       
      </div>
        

       
  );
}

export default App;
