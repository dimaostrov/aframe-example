import React from 'react'
import Link from 'gatsby-link'

import { Button, Container } from 'rebass'
import { VelocityTransitionGroup } from 'velocity-react'

const IndexPage = () => (
  <VelocityTransitionGroup enter={{animation: "slideDown"}} duration={50000} runOnMount={true}>
  <Container bg='navy' color='seashell' m={0} p={8} width={3/5}> 
    <h1>Hi people</h1>
    <p>Here's a demo in React, A-Frame, Rebass that tracks crypto.</p>
    <Link style={{
      textDecoration:"none",
      color:"fuschia"
    }} to="/demo/">
    <Button m={3}>
    Go to demo
    </Button>
    </Link>
  </Container>
  </VelocityTransitionGroup>
)

export default IndexPage
