import React from "react";
import style from "./Row.css";

const Row = props => (
  <tr key={props.id}>
    <td className={style.rowTd}>{props.name}</td>
    <td className={style.rowTd}>{props.freq}</td>
    <td className={style.rowTd}>{props.image}</td>
    <td className={style.rowTd}>{props.votes}</td>
    <td>
      <button>{props.action}</button>
    </td>
  </tr>
);

export default Row;
