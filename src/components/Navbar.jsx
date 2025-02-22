import React from 'react'
import './Navbar.css' 
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menu,setMenu]=useState("Home");
  return (
    <div>
        <ul className='navbar'>
        <div class="logo">
    <a href="#">Avant-Garde</a>
         </div>
         <ul class="nav-menu">
        <li  ><Link  style={{textDecoration:'none'}}to="/">Home</Link> </li>
        <li  class="dropdown"> <Link  style={{textDecoration:'none'}}to="/Aboutus">Aboutus</Link ><ul class="dropdown-menu">
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul></li>
        <li  class="dropdown"> <Link  style={{textDecoration:'none'}}to="/Services">Services</Link> <ul class="dropdown-menu">
        <li><a style={{textDecoration:'none'}} href="#">Our Story</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul></li>
        <li   class="dropdown"> <Link  style={{textDecoration:'none'}}to="/Sector">Sector</Link><ul class="dropdown-menu">
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul></li>
        <li > <Link  style={{textDecoration:'none'}}to="/Projects">Projects</Link></li>
        <li   class="dropdown"> <Link  style={{textDecoration:'none'}}to="/Clients">Clients</Link><ul  class="dropdown-menu">
        <li style={{textDecoration:'none'}} ><a href="#"  > Our Story</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul></li>
        <li > <Link  style={{textDecoration:'none'}}to="/Vendor">Vendor</Link></li>
        
        </ul>
        </ul>
    </div>
  )
}

export default Navbar