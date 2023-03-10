import React, { useState, useEffect } from 'react';
import '../assets/css/style.css'
import Navbar from './Navbar.tsx'
import { useLocation } from 'react-router-dom'

const Intro = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [introduced, setIntroduced] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if(!introduced && location.pathname === '/'){
      write().then(() => {
        document.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            document.getElementById('welcome-container').classList.add('scale-out-horizontal')
            setTimeout(() => {
              setIntroduced(true);  
            }, 500);
            
          }
        })
      });
    }
  })


  const write = async () => {
    var lines = [
      "Welcome to Ghostylab",
      "This is the place where i put my works,",
      "experiments,",
      "and stuffs",
      "[Press Enter to continue]"
    ];
    for (let i = 0; i < lines.length; i++) {
      await writeEs8(lines[i])
    }
  }

  const writeEs8 = async (text) => {
    try {
      var speed = 100;
      for (let i = 0; i < text.length; i++) {
        let el = document.getElementById('welcomeText')
        let html = el.innerHTML;
        el.innerHTML = html + text.charAt(i);
        await delay(speed)
      }
      var html = document.getElementById('welcomeText').innerHTML;
      document.getElementById('welcomeText').innerHTML = html + '<br>';
    } catch (err) {
      console.error(err)
    }
  }

  if (!introduced && location.pathname === '/') {
    return (
      <div id="welcome-container" className="container">
        <div>
          <span id="welcomeText"></span>
          <span className="pointer"></span>
        </div>
      </div>
    );
  } else {
    return (
        <Navbar></Navbar>
    )

  } 


}



export default Intro;