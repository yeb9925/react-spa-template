import React, { Component } from 'react';
import { Welcome, About, Contact } from './'

export default class Main extends Component {
  render() {
    return (
      <div id="components-container">
        <Welcome />
        <About />
        <Contact />
      </div>
    )
  }
}
