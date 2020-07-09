import React from "react"
import { Helmet } from "react-helmet"
import Body from "../components/Body/Body"
import Layout from "../components/HOC/layout"
import "./index.css"

export default function Home() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>ShahCoals | Sole Proprietor</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ShahCoals Sole Proprietor aims to provide best quality Coal in Pakistan. We have BK6 6-Footy, BK4 4-Footy BK2 2-Footy and other Coal types."
        />
        <meta name="keywords" content="ShahCoals, Coals, Coal Pakistan"></meta>
        <meta name="author" content="ShahCoals"></meta>
      </Helmet>
      <Layout>
        <Body />
      </Layout>
    </main>
  )
}
