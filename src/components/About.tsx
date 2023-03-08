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
        <p>Hi, I'm <b>Giuliano</b> and I'm a <b>freelance full stack web developer</b> based in Rome.</p>
        <p>I learnt coding when I was a young kid, just for play and have fun. As my love for coding dates so back, I still enjoy it as much as a kid have fun playing with Legos:</p> 
        <p>I love <b>building things</b>, see them coming to <b>life</b>.</p>
        <p>I develop <b>websites, web apps as well as command line tools</b> useful for server management and more complex tasks.</p>
        <p>Creating from zero or adding new features, in any case I'm always up for a <b>challenge</b></p>
        <h2>So, what have you got for me to <b>build</b>? ;) </h2>

      </div>
      <div id="skills">
        {/* <h2>Some of my skills</h2> */}
        <h2>Some of the things I'm good at:</h2>
        {skillsRows}
        {/* 
          PHP
            Laravel
            Symfony
          Javascript
            React
            Vue
          Python
        */}
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