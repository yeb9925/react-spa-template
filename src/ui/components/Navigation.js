import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div id="nav-container">
        <nav id="nav-bar">
          <Link to="component1-container" activeClass="active" spy={true} smooth={true} className="nav-links">Home</Link>
          <Link to="component2-container" activeClass="active" spy={true} smooth={true} className="nav-links">About</Link>
          <Link to="component3-container" activeClass="active" spy={true} smooth={true} className="nav-links">Contact</Link>
        </nav>
        {
          this.props.children
        }
      </div>
    )
  }
}
