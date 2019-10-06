import React, { Component } from "react";
import Row from "./Row";
import "./Table.css";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
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
          freq={action.frequency}
          image={action.picture_url}
          votes={10}
          action={"Edit"}
        />
      ));
    } else {
      actions = <p>No data</p>;
    }

    return (
      <table className="Actions-List">
        <thead>
          <tr className="Actions-tr">
            <td>Name</td>
            <td>Frequency</td>
            <td>Image</td>
            <td>Votes</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{actions}</tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        {this.returnTableData(this.state.actions)}
        <button>Add an Action</button>
      </div>
    );
  }
}
