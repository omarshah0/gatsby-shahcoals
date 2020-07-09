import React from "react"
import ctaWhatsApp from "../../Assets/cta_whatsapp.png"
import "./Button.css"
function Button(props) {
  return (
    <div className="cta-button">
      <a
        className="float"
        href="https://api.whatsapp.com/send?phone=+923336483355"
        target="__blank"
      >
        <img src={ctaWhatsApp} alt="cta-whatsapp"></img>
      </a>
    </div>
  )
}

export default Button
