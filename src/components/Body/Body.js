import React from "react"
// Import of 3rd Party Packages
import { Link } from "gatsby"
// Import of Functional Components
import Card from "../Card/Card"
import Button from "../CTAButton/Button"
// Import of CSS Files and Videos
import "./Body.css"
import Movie from "../../Assets/ShahCoals.mp4"

function Body() {
  return (
    <React.Fragment>
      <section className="container">
        <div className="video">
          <video autoPlay loop muted>
            <source src={Movie} type="video/mp4" />
          </video>
        </div>
        <div className="title">
          <h1>ShahCoals</h1>
          <h2>
            We Aim To Deliver The <span>HIGHEST QUALITY COAL</span> We Mine.
          </h2>
        </div>
        <Button />
      </section>
      <section className="ShahCoals-products">
        <h1 className="popular-products">ShahCoals Popular Products</h1>
        <div className="card-container">
          <Card
            name="BK-6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
          <Card
            name="BK-4 (4-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
          <Card
            name="BK-2 (2-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
        </div>
        <Link exact to="/products">
          <button className="btn">More Products</button>
        </Link>
      </section>
    </React.Fragment>
  )
}

export default Body
