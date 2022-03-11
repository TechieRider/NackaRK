import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const FirstBlock = ({ siteTitle }) => (
  <div>
      <h1 style={{color: 'white'}}>Nu startar vi rugbyklubb i Nacka</h1>
      <p>Intresserad av att börja lira? Gör en <a href="https://form.jotform.com/220694468297369">intresseanmälan här</a></p>
  </div>
)

export default FirstBlock;
