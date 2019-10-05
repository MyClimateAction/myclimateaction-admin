import React, { Component } from "react";

export default class AuthToken extends Component {
  state = {
    tokenString: "",
    isTokenValid: false
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
      <form onSubmit={this.handleSubmit}>
        <label>My climate action admin</label>
        <input onChange={this.onTypeChange} placeholder="Enter auth token" />
        <button type="submit" id="submit">
          Access
        </button>
      </form>
    );
  }
}
