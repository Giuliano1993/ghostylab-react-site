import React from "react";
import photo from  '../assets/pics/thisisme.jpeg'
import { NavLink } from 'react-router-dom'
const Home = () => { 
  return(
    <>
  <section className="home-intro">
    {/** please trovare una foto migliore da usare per questa parte */}
    
      <img src={photo} width="200px" alt="Giuliano's picture"/>
    
    <div className="intro-titles">
      <h1>Hi! This is Giuliano</h1>  
      <h2>I develop stuff for the web</h2>  
      <h3>/* And this is my lab */</h3>  
    </div>
  </section>
  <section className="building">
    <p>
      Hi, I'm a freelance full stack web developer based in Rome. <br/>
      I develop websites and web apps as well as command line tools useful for server management and more complex tasks.
      On this site you can check'em out or hire me to work together on your next project.
    </p>
    <div>
      <NavLink className="navbar-item" to="/projects" >
        Check the projects out<span className="pointer"></span>
      </NavLink>
      <NavLink className="navbar-item" to="/contact" >
        Contact me <span className="pointer"></span>
      </NavLink>
    </div>
  </section>
  </>);
}

export default Home;

