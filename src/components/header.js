import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <div>
  <header
    style={{
      background: "#202123",
      marginBottom: `1.45rem`,
      margin: "0 15% 0 15%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link to="/">
            <StaticImage
            src="../images/nacka_rk_logo.png"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Nacka Rugby"
            style={{ marginBottom: `1.45rem` }}
            />
        </Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  <ul className="navbar">
    <li>Hem</li>
    <li>
        <Link to="/about">
            Om oss
        </Link>
    </li>
    <li>Vad är rugby?</li>
  </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
