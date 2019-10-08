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

  modifyAction = (id, name, picture_url, frequency) => {
    let data = {
      name: name,
      picture_url: picture_url,
      frequency: frequency
    };
    this.props.modifyAction(id, data);
    this.handleEdit();
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
              <button
                onClick={() =>
                  this.modifyAction(
                    this.props.id,
                    this.props.name,
                    this.props.picture_url,
                    this.props.frequency
                  )
                }
              >
                Done
              </button>
            </td>
          </React.Fragment>
        )}

        {!this.state.isEdit && (
          <React.Fragment>
            <td className="rowTd">{this.state.name}</td>
            <td className="rowTd">{this.state.frequency}</td>
            <td className="rowTd">{this.state.picture_url}</td>
            <td className="rowTd">{this.state.votes}</td>
            <td className="rowTd">
              <button onClick={this.handleEdit}>Edit</button>
            </td>
            <td className="rowTd">
              <button onClick={() => this.props.deleteAction(this.props.id)}>
                X
              </button>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}
