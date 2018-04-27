import React, { Component } from 'react';
import { Welcome, About, Events, AdoptableDogs, GetInvolved, Contact, Donate } from './'

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
