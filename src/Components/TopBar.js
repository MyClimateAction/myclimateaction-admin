import React, { Component } from "react";

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar-container">
        <h2 className="TopBar-item">actions</h2>
        <h1 className="TopBar-item">MYCLIMATEACTION</h1>
        <button className="TopBar-item" onClick={this.props.logout}>
          logout
        </button>
      </header>
    );
  }
}
