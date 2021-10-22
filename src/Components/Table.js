import React from "react";
import "./Table.css";

function table(props) {
  if (typeof props.data == "object") {
    return (
      <table>
        <thead>
          <tr>
            {props.data.header.map((item) => (
              <th width="250">{item}</th>
            ))}
          </tr>
        </thead>
        {Array.isArray(props.data.contents[0]) ? (
          <tbody>
            {props.data.contents.map((item) => (
              <tr>
                {item.map((inner) => (
                  <td>{inner}</td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {props.data.contents.map((item) => (
              <td>{item}</td>
            ))}
          </tbody>
        )}
      </table>
    );
  } else {
    return null;
  }
}

export default table;
