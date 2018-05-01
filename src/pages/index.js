import React from 'react'
import Link from 'gatsby-link'

import { Button, Container } from 'rebass'

const IndexPage = () => (
  <Container bg='navy' color='seashell' m={0} p={8} width={1/5}> 
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
)

export default IndexPage
