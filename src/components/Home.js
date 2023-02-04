import React from "react";
import photo from  '../assets/pics/thisisme.jpeg'
import { NavLink } from 'react-router-dom'
const Home = () => { 
  return(
    <>
  <section className="home-intro">
    {/** please trovare una foto migliore da usare per questa parte */}
    <img src={photo} width="200px"/>
    <div>
      <h1>Hi! This is Giuliano</h1>  
      <h2>I'm a Freelance Fullstack web developer</h2>  
      <h3>Welcome to my lab</h3>  
    </div>
  </section>
  <section className="building">
    <p>
      I love building stuff and making experiments with code. On this site you can check'em out or hire me to work together on your next project.
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

