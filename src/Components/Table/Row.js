import React from "react";
import "./Row.css";

const Row = props => (
  <tr key={props.id}>
    <td className="rowTd">{props.name}</td>
    <td className="rowTd">{props.freq}</td>
    <td className="rowTd">{props.image}</td>
    <td className="rowTd">{props.votes}</td>
    <td>
      <button>{props.action}</button>
    </td>
  </tr>
);

export default Row;
