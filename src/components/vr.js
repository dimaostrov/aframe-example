import React, { Component } from 'react'
import Link from 'gatsby-link'

import 'aframe'
import 'aframe-layout-component'
import { Entity, Scene } from 'aframe-react'
import NoSSR from 'react-no-ssr'

import data from '../data/data.json'
import getImage from '../images/index'
import sky from '../images/space.jpg'

class VR extends React.Component {
  render() {
    const spheres = Object.entries(data.coins).map((x, i) => {
      return (
        <Entity
          geometry={{ primitive: 'sphere' }}
          material={{ src: getImage(x[0]) }}
          events={{
            click: console.log(`has been clicked`),
          }}
        />
      )
    })
    const Loading = () => (<div>Loading...</div>);
    return (
      <NoSSR onSSR={<Loading />}>
        <Scene>
          <Entity
            layout={{ type: 'circle', radius: 4 }}
            position={{ x: 0, y: 2, z: -8 }}
          >
            {spheres}
          </Entity>
          <Entity light={{ type: 'ambient' }} />
          <a-sky src={sky} />
        </Scene>
      </NoSSR>
    )
  }
}

export default VR
