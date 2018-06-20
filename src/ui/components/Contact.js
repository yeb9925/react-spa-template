import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <form id="contact-form">
          <label className="contact-input">
            Name:<br/>
            <input type="text" name="name"/>
          </label>
          <label className="contact-input">
            Email:<br/>
            <input type="text" name="email"/>
          </label>
          <label className="contact-input">
            Subject:<br/>
            <input type="text" name="subject"/>
          </label>
          <label className="contact-input">
            Description:<br/>
            <input type="text" name="description"/>
          </label>
        </form>
      </div>
    )
  }
}