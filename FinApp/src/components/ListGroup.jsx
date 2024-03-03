import React, { useState } from "react";

function ListGroup() {
  const lista = ["New York", "Dubai", "London", "Tokyo", "Belgrade"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>Lista</h1>
      <ul className="list-group">
        {lista.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
