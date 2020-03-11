import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
    <nav>
         <Link to="" className="logo-link"> <h2 className="logo">{props.title}</h2> </Link>
        <ul className="nav-menu">
          <li><NavLink exact to="/" className="nav-menu__link" >  Home </NavLink></li>
          <li><NavLink to="/Actors"className="nav-menu__link" > Meilleurs Acteurs </NavLink> </li>
          <li> <NavLink to="/Actress" className="nav-menu__link" > Meileures Actrices </NavLink></li>
          <li> <NavLink to="/Films" className="nav-menu__link" > Meilleurs Films </NavLink></li>
        </ul>
    </nav>
    ) ;
}

export default NavBar ;