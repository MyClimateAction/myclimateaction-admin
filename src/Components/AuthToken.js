import React, { Component } from "react";
import "./AuthToken.css";

export default class AuthToken extends Component {
  state = {
    tokenString: ""
  };

  onTypeChange = e => {
    this.setState({ tokenString: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAccess(this.state.tokenString);
  };

  render() {
    return (
      <form className="Auth-container" onSubmit={this.handleSubmit}>
        <label className="Auth-item">My climate action admin</label>
        <input
          className="Auth-item"
          onChange={this.onTypeChange}
          type="password"
          placeholder="Enter auth token"
        />
        <button className="Auth-item" type="submit" id="submit">
          Access
        </button>
      </form>
    );
  }
}
