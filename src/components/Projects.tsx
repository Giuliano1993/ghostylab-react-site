import React from "react";
import TerminalButton from "./elements/TerminalButton.tsx";
import labImg from '../assets/pics/LAB_TAB.png'

const Projects = () => {
  /*const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
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
  }*/

  return (
    <div id="projects-container" className="container">
       <div>
        <img src={labImg} alt="an hash art of laboratory tools"/>
        <h1>My projects</h1>
        <p>I love build and share small funny projects.</p>
        <p>This is the heart of my lab, so here you won't probably find my work projects, but most likely some of my personal coding experiments.</p>
        <p>This page is still under construction, but while you wait for the coding projects to be organized (you can still find them on github ), why don't you take a look at the coding contents? </p>
        <div id="toContent">
          <TerminalButton text="My articles on Dev.to"  href={"https://dev.to/giuliano1993"}/>
          <TerminalButton text="My LinkedIn profile"  href={"https://www.linkedin.com/in/giuliano-gostinfini/"}/>
          <TerminalButton text="Github"  href={"https://github.com/Giuliano1993"}/>
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