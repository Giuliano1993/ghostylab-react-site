import React from "react";
import '../assets/css/style.css';


export const SkillBox = (props)=>{
  // TODO : add dropdown alle skill, con stile ls alberato
  // mostrando conoscenze relative tipo su php -> laravel, symfony, wordpress
  // su js ->react e vue
  // su css -> bootstrap, tailwind sass
  // da ragionare :D 
  return(
    <div className="skill-box">
      <div>[</div>
      <div className="skill-left-fill"></div>
      <div className="skill-text">{props.skill}</div>
      <div className="skill-right-fill"></div>
      <div>]</div>
    </div>
  )
}

export const skills = [
  "Php",
  "Laravel",
  "Symfony",
  "Wordpress",
  "Javascript",
  "React",
  "Vue",
  "Python"
]; 
export const About = () => {


  const skillsRows: JSX.Element[] = []

  skills.forEach((el)=>{
    skillsRows.push(<SkillBox skill={el}></SkillBox>);
  })
  return(
    <div className="about-page container">

      <div className="aboutText">
        <h2>Hello there</h2>
        <p>I'm <b>Giuliano</b> and I'm a <b>freelance full stack web developer</b> based in Rome.</p>
        <p>My love for code was born when i was around 12 years old, and as time passed by, it has grown with me. I work as developer since i was 23, while i was taking a literature degree, since i really have many different interests and I really believe in the power of knowledge and in having a <b>flexible mindset</b>.</p> 
        <p>Coding for me has always been, first of all, a way of playing around. It really feels like doing lego-like stuff, building, unmounting, changing, improving until you have your desired result. It's something in between an artistic and a technical work, very artisan like, and can't stop being in love with it.</p> 
        <p>This is why I love to vary my stack and the projects i work on, from websites, to web-apps, from command line tools to automation processes.</p> 
        <br/>
        <p>I lately started also <b>teaching</b> junior developers and <b>writing</b> dev articles. In the last years the love for <b>sharing knowledge</b> has grown in me more and more, and it's finding its way in my everyday life, and couldn't be more happy and satisfied with it. </p>
        <br/>
        <p>My main languages are PHP ( both plain and with Symfony or Laravel frameworks) an JS ( plain or within Node.js enviroment, creating front-end with React or Vue ).</p>
        <p>I also love Python very much, I use it for building my command line tools, for automating tasks. </p>
        <p>I develop <b>websites, web apps as well as command line tools</b> useful for server management and more complex tasks.</p>
        <p>Creating from zero or adding new features, in any case I'm always up for a <b>challenge</b></p>
        <h2>So, what have you got for me to <b>build</b>? ;) </h2>

      </div>
      <div id="skills">     
        <h2>Some of the things I'm good at:</h2>
        {skillsRows}
      </div>
    </div>
    
  )
}

//export {About, SkillBox, skills};



/*


+-------------------------+
|          Hello          |
+-------------------------+
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |
+-------------------------+
*/ 