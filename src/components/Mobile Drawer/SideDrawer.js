import React from "react"
import { Link } from "gatsby"
import "./SideDrawer.css"

function SideDrawer(props) {
  return (
    <div className="side-drawer">
      <div className="button-wrapper">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="40"
          height="40"
          viewBox="0 0 16 16"
          className="close-btn"
          onClick={props.closeSideDrawer}
        >
          <path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path>
        </svg>
      </div>
      <nav className="mobile-menu">
        <ul className="navbar">
          <li className="nav-items">
            <Link to="/" activeClassName="active-mobile">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/about" activeClassName="active-mobile">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/products" activeClassName="active-mobile">
              Prodcuts
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" activeClassName="active-mobile">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideDrawer
