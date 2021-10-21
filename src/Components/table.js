import React from "react";
import "./Table.css";

function table(props) {
  return (
    <table>
      <thead>
        <tr>
          {props.data.header.map((item) => (
            <th width="200">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.contents.map((item) => (
          <tr>
            {item.map((inner) => (
              <td>{inner}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default table;
