import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Header from "../Header/Header"
import MobileHeader from "../MobileHeader/MobileHeader"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
  const matches = useMediaQuery("(min-width:690px)")
  return (
    <React.Fragment>
      {matches ? <Header /> : <MobileHeader />}
      {children}
      <Footer />
    </React.Fragment>
  )
}
