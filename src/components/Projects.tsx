import React, { useEffect } from "react";
import SnakeGame from "./snake/SnakeGame";
const Projects = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  useEffect(()=>{
    //write()
  })


  
  const writeEs8 = async (text) => {
    try {
      var speed = 100;
      for (let i = 0; i < text.length; i++) {
        let el = document.getElementById('comingSoonText')
        if(!el) throw new Error('Could not find element')
        let html = el.innerHTML;
        el.innerHTML = html + text.charAt(i);
        await delay(speed)
      }
      var html = document.getElementById('comingSoonText')!.innerHTML;
      document.getElementById('comingSoonText')!.innerHTML = html + '<br>';
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div id="projects-container" className="container">
       <div>
        <span id="comingSoonText"></span>
        <span className="pointer"></span>
      </div> 
      {
        //<SnakeGame></SnakeGame>
      }
    </div>
  )
}

export default Projects;