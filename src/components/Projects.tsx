import React, { useEffect } from "react";
import TerminalButton from "./elements/TerminalButton.tsx";

const Projects = () => {
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  useEffect(()=>{
    write()
  })


  const write = async () => {
    var lines = [
      "Coming Soon",
    ];
    for (let i = 0; i < lines.length; i++) {
      await writeEs8(lines[i])
    }
  }

  const writeEs8 = async (text: string) => {
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
      document.getElementById('comingSoonText')!.innerHTML = html;// + '<br>';
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div id="projects-container" className="container">
       <div>
        <p>I love develop small funny projects to share.</p>
        <p> Here you won't probably find my work stuff, but i can show you my skill while having fun with code</p>
        <p>This page is still under construction, but while you wait for the coding projects, why don't you take a look at the coding contents? </p>
        <div id="toContent">
          <TerminalButton text="My articles on Dev.to"  href={"https://dev.to/giuliano1993"}/>
          <TerminalButton text="My LinkedIn profile"  href={"https://www.linkedin.com/in/giuliano-gostinfini/"}/>
        </div>
      
        {/* <div>
          <span id="comingSoonText"></span>
          <span className="pointer"></span>
        </div> */}
        
      </div> 
      {
        //<SnakeGame></SnakeGame>
      }
    </div>
  )
}

export default Projects;