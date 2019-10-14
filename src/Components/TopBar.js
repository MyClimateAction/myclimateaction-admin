import React, { Component } from "react";
import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar-container">
        <h2 className="TopBar-item">actions</h2>
        <h1 className="TopBar-item">MYCLIMATEACTION</h1>
        <button
          id="buttonLogout"
          className="TopBar-item"
          onClick={this.props.logout}
        >
          Logout
        </button>
      </header>
    );
  }
}
