import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="nav-container">
        <nav id="nav-bar">
          <Link to="welcome-container" activeClass="active" spy={true} smooth={true} className="nav-links">Home</Link>
          <Link to="about-container" activeClass="active" spy={true} smooth={true} className="nav-links">About</Link>
          <Link to="events-container" activeClass="active" spy={true} smooth={true} className="nav-links">Events</Link>
          <Link to="adopt-container" activeClass="active" spy={true} smooth={true} className="nav-links">Adoptable Dogs</Link>
          <Link to="involved-container" activeClass="active" spy={true} smooth={true} className="nav-links">Get Involved</Link>
          <Link to="contact-container" activeClass="active" spy={true} smooth={true} className="nav-links">Contact</Link>
          <Link to="donate-container" activeClass="active" spy={true} smooth={true} className="nav-links">Donate</Link>
        </nav>
        {
          this.props.children
        }
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.object
}
