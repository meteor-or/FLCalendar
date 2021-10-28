import React from "react";
import "./Table.css";

function table(props) {
  if (typeof props.data == "object") {
    return (
      <table>
        <thead>
          <tr>
            {props.data.header.map((item) => (
              <th colSpan={item.colspan}>{item.title}</th>
            ))}
          </tr>
        </thead>
        {/* tbody에 넣을 컨텐츠가  */}
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
