import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'

import Header from '../components/header'
import { VelocityTransitionGroup } from 'velocity-react'
import { Banner } from 'rebass';
//import './index.css'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Provider>
      <Header m={'auto'} siteTitle={data.site.siteMetadata.title} />
      <Banner bg='black'>
        {children()}
      </Banner>
    </Provider>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
