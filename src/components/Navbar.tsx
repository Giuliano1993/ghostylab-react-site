import React  from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from './Home.tsx'
import {About} from './About.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'
import CommandLine from './CommandLine'
const Navbar = ()=>{
  
  return (
    <>
    <nav className="navbar is-primary" role="navigation">
      <NavLink className="navbar-item" to="/" >
        Home
      </NavLink>
      <NavLink className="navbar-item" to="/about" >
        About
      </NavLink>
      <NavLink className="navbar-item" to="/projects" >
        Projects
      </NavLink>
      <NavLink className="navbar-item" to="/contact" >
        Contact
      </NavLink>
    </nav>
    
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    {/* <ReactTerminal id="terminal" commands={commands} showControlBar={false} theme={"matrix"} prompt={">"} welcomeMessage={<p>Type help to check the available commands<br/></p>}/> */}
    <CommandLine></CommandLine>
  </>
  )
}

export default Navbar;