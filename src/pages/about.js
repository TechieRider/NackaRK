import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const About = ({ siteTitle }) => {
    return (
        <Layout>
            <div>
                <h1 style={{color: 'white'}}>Om oss</h1>
                <p>Intresserad av att börja lira? Gör en <a href="https://form.jotform.com/220694468297369">intresseanmälan här</a></p>

                <p>Har du frågor? Maila oss på <a href="mailto:info@nackarugby.com">info@nackarugby.com</a></p>
            </div>
  </Layout>
    )}

export default About;
