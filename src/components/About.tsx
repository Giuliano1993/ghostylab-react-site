import React from "react";
import '../assets/css/style.css';


const SkillBox = (props)=>{

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
const About = () => {

  const skills = [
    "Php",
    "Laravel",
    "Symfony",
    "Javascript",
    "React",
    "Vue",
    "Python"
  ];

  const skillsRows: JSX.Element[] = []

  skills.forEach((el)=>{
    skillsRows.push(<SkillBox skill={el}></SkillBox>);
  })
  return(
    <div className="about-page">

      <div className="aboutText">
        <h2>Hello there</h2>
        <p>Hi, I'm <b>Giuliano</b> and I'm a <b>freelance full stack web developer</b> based in Rome.</p>
        <p>I learnt coding when I was a young kid, just for play and have fun. As my love for code dates so back, I still love coding as much as a kid loves playing with costructions: I love <b>building things</b>, see them coming to <b>life</b>.</p>
        <p>I develop <b>websites and web apps as well as command line tools</b> useful for server management and more complex tasks.</p>
        <p>I love taking care of the whole process, from design to deploy, and this allows me to have a deep knowledge and understanding of the project I'm working on.</p>

      </div>
      <div id="skills">
        <h2>Some of my skills</h2>
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

export default About;



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