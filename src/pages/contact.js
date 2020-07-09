import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/HOC/layout"
import Button from "../components/CTAButton/Button"

import "./contact/Contact.css"

function Contact() {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Contact Us | ShahCoals</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Contact ShahCoals at info@shahcoals.com or send us a quick WhatsApp now on +923336483355."
        />
        <meta
          name="keywords"
          content="ShahCoals, Coals, Coal Pakistan, Contact ShahCoals"
        ></meta>
        <meta name="author" content="ShahCoals"></meta>
      </Helmet>
      <div className="contact">
        <h1>CONTACT US</h1>
        <div className="contact-box">
          <div className="contact-phone">
            <h2>+92 333 648 3355</h2>
            <p>Monday - Friday</p>
            <p>8:00 AM - 5:00 PM PST</p>
            <h3>WhatsApp Now</h3>
            <Button />
          </div>
          <div className="contact-office">
            <h2>OFFICE</h2>
            <p>
              Mohsin Town, Pull Dat <br></br> Dera Ghazi Khan
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
