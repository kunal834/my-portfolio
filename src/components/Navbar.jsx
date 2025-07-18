import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import kunal from './kunal.png';

const Navbar = () => {
  return (
    
      <nav>
        <ul>
               <li><img src={kunal} style={{width:"30px"}}alt="" /></li>
            <Link to="/" style={{color: "white", textDecoration: "none",fontSize:"18px" } }> Home</Link>
            <Link to="/aboutus"  style={{color: "white", textDecoration: "none",fontSize:"18px"}} >About</Link>
            <Link to="/contact"  style={{color: "white", textDecoration: "none",fontSize:"18px"}} > Contact</Link>
            <Link to="/help"  style={{color: "white" , textDecoration: "none",fontSize:"18px"}} > Projects</Link>
            <Link to="/Login"  style={{color: "black" , textDecoration: "none",border:"2px solid black" , padding: "0 8px",background:"beige",fontSize:"18px"}} > Login</Link>
        </ul>
      </nav>
    
  )
}

export default Navbar
