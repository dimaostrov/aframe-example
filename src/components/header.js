import React from 'react'
import Link from 'gatsby-link'

import { Toolbar } from 'rebass'
import { VelocityTransitionGroup } from 'velocity-react';

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
      <VelocityTransitionGroup enter={{animation: "fadeOut", rotateZ: '45deg'}} duration={1000} runOnMount={true}>

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
      </VelocityTransitionGroup>
    </div>
  </Toolbar>
)

export default Header
