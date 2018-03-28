import React, { Component } from 'react';

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcome-container">
        <div id="welcome-image">Image</div>
        <Link to="contact-container" activeClass="active" spy={true} smooth={true} id="welcome-button">Image goes here</Link>
      </div>
    )
  }
}
