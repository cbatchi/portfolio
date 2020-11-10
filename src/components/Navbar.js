import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logo, menus }) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo du site"/>
        </Link>
      </div>
      <div className="navbar-menu">
        <ul>
          {menus.map((menu, index) => <li key={index}>
              <Link to={'#' + menu.ancre}>{menu.title}</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
