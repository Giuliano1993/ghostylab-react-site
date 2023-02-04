import React  from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
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
  </>
  )
}

export default Navbar;