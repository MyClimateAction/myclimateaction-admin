import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <label>My climate action admin</label>
        <input
          onChange={this.onTypeChange}
          type="password"
          placeholder="Enter auth token"
        />
        <button type="submit" id="submit">
          Access
        </button>
      </form>
    );
  }
}
