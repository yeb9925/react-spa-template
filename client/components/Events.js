import React, { Component } from 'react';

export default class Events extends Component {
  render() {
    return (
      <div id="events-container">
        <div>
          <h1>Events</h1>
        </div>
        <div id="my-events-container">
          <div className="events-items">
            Show 1
          </div>
          <div className="events-items">
            Show 2
          </div>
          <div className="events-items">
            Show 3
          </div>
        </div>
      </div>
    )
  }
}