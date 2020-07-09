import React from "react"
// Import of 3rd Party Packages
import { Link } from "gatsby"
// Import of CSS Files
import "./Header.css"

function Header() {

  return (
    <header>
      <Link to="/" >
        <div className="brand-logo"></div>
      </Link>
      <ul className="navbar">
        <li className="nav-items">
          <Link to="/" activeClassName="active">Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/about" activeClassName="active">About</Link>
        </li>
        <li className="nav-items">
          <Link to="/products" activeClassName="active">Prodcuts</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact" activeClassName="active">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
