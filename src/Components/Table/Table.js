import React, { Component } from "react";
import Row from "./Row";
import PopupActions from "../PopupActions";
import "./Table.css";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      showPopup: false
    };
  }

  returnTableData = () => {
    const results = this.props.data;
    let actions;
    if (results.length) {
      actions = results.map(action => (
        <Row
          key={action.id}
          id={action.id}
          name={action.title}
          frequency={action.frequency}
          picture_url={action.picture_url}
          votes={10}
          modifyAction={this.props.modifyAction}
          deleteAction={this.props.deleteAction}
        />
      ));
    } else {
      actions = (
        <tr>
          <td>No data</td>
        </tr>
      );
    }

    return (
      <table className="Actions-List">
        <thead>
          <tr className="Actions-tr">
            <td id="Name" className="rowTd">
              Name
            </td>
            <td id="Frequency" className="rowTd">
              Frequency
            </td>
            <td id="Image url" className="rowTd">
              Image url
            </td>
            <td id="Votes" className="rowTd">
              Votes
            </td>
            <td id="Edit" className="rowTd">
              Edit
            </td>
            <td id="Delete" className="rowTd">
              Delete
            </td>
          </tr>
        </thead>
        <tbody>{actions}</tbody>
      </table>
    );
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div>
        {this.returnTableData(this.state.actions)}
        <button id="addAction" onClick={this.togglePopup}>
          Add an Action
        </button>
        {this.state.showPopup && (
          <PopupActions
            closePopup={this.togglePopup}
            addAction={this.props.addAction}
          />
        )}
      </div>
    );
  }
}
