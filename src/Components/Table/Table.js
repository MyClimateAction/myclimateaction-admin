import React, { Component } from "react";
import Row from "./Row";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        {
          id: 0,
          name: "Vegan",
          frequency: "Daily", //should be an enum
          image: "url",
          votes: "100",
          action: "Edit" //should be an enum}
        },
        {
          id: 1,
          name: "Walk",
          frequency: "Daily", //should be an enum
          image: "url",
          votes: "50",
          action: "Edit" //should be an enum}
        }
      ]
    };
  }

  returnTableData = () => {
    const results = this.props.data;
    console.log(results);
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
