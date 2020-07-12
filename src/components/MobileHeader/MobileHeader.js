import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import SideDrawer from "../Mobile Drawer/SideDrawer"
import "./MobileHeader.css"

function MobileHeader() {
  const [sideDrawer, setSideDrawer] = useState(false)

  return (
    <header>
      <CSSTransition in={sideDrawer} timeout={300} unmountOnExit classNames="slide">
        <SideDrawer closeSideDrawer={() => setSideDrawer(false)} />
      </CSSTransition>
      <div className="mobile-menu-btn" onClick={() => setSideDrawer(true)}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    </header>
  )
}

export default MobileHeader
