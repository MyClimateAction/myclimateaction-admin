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
    this.setState({
      isEdit: true
    });
  };

  handleDone = e => {
    const newName = e.target.name;
    const newPicture_url = e.target.picture_url;
    const newFrequency = e.target.frequency;

    this.setState({
      isEdit: false,
      name: newName,
      picture_url: newPicture_url,
      frequency: newFrequency
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
                onChange={this.handleDone}
              />
            </td>
            <td className="rowTd">
              <input
                type="text"
                name="frequency"
                value={this.state.frequency}
                onChange={this.handleDone}
              />
            </td>
            <td className="rowTd">
              <input
                type="text"
                name="picture_url"
                value={this.state.picture_url}
                onChange={this.handleDone}
              />
            </td>
            <td className="rowTd">{this.props.votes}</td>
            <td className="rowTd">
              <button onClick={this.handleDone}>Done</button>
            </td>
          </React.Fragment>
        )}

        {!this.state.isEdit && (
          <React.Fragment>
            <td className="rowTd">{this.props.name}</td>
            <td className="rowTd">{this.props.frequency}</td>
            <td className="rowTd">{this.props.picture_url}</td>
            <td className="rowTd">{this.props.votes}</td>
            <td>
              <button onClick={this.handleEdit}>Edit</button>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}
