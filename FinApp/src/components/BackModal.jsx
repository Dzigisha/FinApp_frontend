import React from "react";

function BackModal({ closeInputStavka }) {
  const clickHandler = () => {
    closeInputStavka();
  };
  return <div onClick={clickHandler} className="backModal"></div>;
}

export default BackModal;
