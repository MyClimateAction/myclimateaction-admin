import React, { Component } from "react";
import "./Row.css";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: "",
      picture_url: "",
      frequency: ""
    };
  }

  componentDidMount() {
    this.setState({
      isEdit: false,
      name: this.props.name,
      picture_url: this.props.picture_url,
      frequency: this.props.frequency
    });
  }

  handleEdit = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }));
  };

  handleUpdateValue = e => {
    const value = e.target.value;
    const stateName = e.target.name;

    this.setState({
      [stateName]: value
    });
  };

  render() {
    return (
      <tr key={this.props.id}>
        {this.state.isEdit && (
          <React.Fragment>
            <td className="rowTd">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleUpdateValue}
              />
            </td>
            <td className="rowTd">
              <select
                name="frequency"
                value={this.state.frequency}
                onChange={this.handleUpdateValue}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </td>
            <td className="rowTd">
              <input
                type="text"
                name="picture_url"
                value={this.state.picture_url}
                onChange={this.handleUpdateValue}
              />
            </td>
            <td className="rowTd">{this.props.votes}</td>
            <td className="rowTd">
              <button onClick={this.handleEdit}>Done</button>
            </td>
          </React.Fragment>
        )}

        {!this.state.isEdit && (
          <React.Fragment>
            <td className="rowTd">{this.state.name}</td>
            <td className="rowTd">{this.state.frequency}</td>
            <td className="rowTd">{this.state.picture_url}</td>
            <td className="rowTd">{this.state.votes}</td>
            <td>
              <button onClick={this.handleEdit}>Edit</button>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}
