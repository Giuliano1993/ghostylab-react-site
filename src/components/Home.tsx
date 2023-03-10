import React from "react";
import photo from  '../assets/pics/thisisme.jpeg'
import TerminalButton from "./elements/TerminalButton.tsx";

const Home = () => { 
 
  return(
    <>
    <div id="home" className="container">
        <section className="home-intro">
          <div>
            <img src={photo} width="200px" alt="Giuliano"/>
          </div>
          <div className="intro-titles">
            <h1>Hi! This is Giuliano</h1>
            <h2>I develop stuff for the web</h2>
            <h3>{"/* And this is my lab */"}</h3>
          </div>
            </section>
            <section className="building">
          <p>
            Hi, I'm a freelance full stack web developer based in Rome. <br/>
            I develop websites and web apps as well as command line tools useful for server management and more complex tasks.
            On this site you can check'em out or hire me to work together on your next project.
          </p>
          <div>
            <TerminalButton href="/projects"  text="Check the projects"></TerminalButton>
            <TerminalButton href="/contact"  text="Contact me"></TerminalButton>
          </div>
        </section>
    </div>
  </>);
}

export default Home;

