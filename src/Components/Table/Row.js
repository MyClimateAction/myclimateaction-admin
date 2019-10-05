import React from "react";

const Row = props => (
  <tr key={props.id} className="Actions-row">
    <td>{props.name}</td>
    <td>{props.freq}</td>
    <td>{props.image}</td>
    <td>{props.votes}</td>
    <td>
      <button>{props.action}</button>
    </td>
  </tr>
);

export default Row;
