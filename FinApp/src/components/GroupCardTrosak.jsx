import React from "react";
import CardTrosak from "./CardTrosak";
function GroupCardTrosak() {
  return (
    <div className="d-flex justify-content-around">
      <CardTrosak />
      <CardTrosak />
      <CardTrosak />
      <CardTrosak />
    </div>
  );
}

export default GroupCardTrosak;
