import React from 'react'
import Link from 'gatsby-link'

import { Toolbar } from 'rebass'

const Header = ({ siteTitle }) => (
  <Toolbar
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
      >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Toolbar>
)

export default Header
