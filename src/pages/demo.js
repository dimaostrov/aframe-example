import React from 'react'
import Link from 'gatsby-link'
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

import data from '../data/countries.json';


class VRScene extends React.Component {
  render () {
    const spheres = Object.entries(data.countries_msg_vol).map( (x, i) => {
      return <Entity geometry={{primitive: 'sphere'}} material={{color: 'red'}} position={{x: i + 2, y: i*2, z: i*2}}/>
    });
    console.log(spheres);
    return (
      <Scene>
        {spheres}
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
    );
  }
}


export default VRScene;
