import React, { Component } from 'react'
import Link from 'gatsby-link'

import VR from '../components/vr'

class VRScene extends React.Component {
  render() {
    return (
      <VR />
    ) 
  }
}

export default VRScene

//position={{x: i*10 - 50, y: i, z: -x[1]/10}}
//, radius: (x[1]/50).toString()
/*
const vr = this.state.loading ? (
  <p>Loading...</p>
) : <VR />
*/