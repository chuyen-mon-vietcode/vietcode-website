import React from "react"
import { Link } from "gatsby"
import {Button} from "reactstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <blockquote className="blockquote">
      <p>Your will, your strength, and so on...</p>
    </blockquote>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button tag={Link} to="/profile/" color="primary">Do something</Button>
  </Layout>
)

export default IndexPage
