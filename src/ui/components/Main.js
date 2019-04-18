import React, { Component } from 'react'
import { Component1, Component2, Component3 } from './'

export default class Main extends Component {
  render() {
    return (
      <div id="components-container">
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    )
  }
}
