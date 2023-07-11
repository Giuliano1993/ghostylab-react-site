import React, { useEffect } from "react";

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
        <p>I like develop small fun projects to share. Here you won't probably find my work stuff, but i can show you my skill while having fun with code</p>
        <p>If you propose me a fun and interesting project, you can be sure I will deliver it in the most positive and committed attitude, check these small works of mine, what do you think? </p>
      
        <div>
          <span id="comingSoonText"></span>
          <span className="pointer"></span>
        </div>
        
      </div> 
      {
        //<SnakeGame></SnakeGame>
      }
    </div>
  )
}

export default Projects;