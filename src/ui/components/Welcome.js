import React, { Component } from 'react'

import { Link } from 'react-scroll'

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcome-container">
        <Link to="contact-container" activeClass="active" spy={true} smooth={true} id="welcome-button"><h2>Welcome</h2></Link>
      </div>
    )
  }
}
