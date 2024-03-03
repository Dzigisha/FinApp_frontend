import React from "react";

function CardTrosak() {
  return (
    <>
      <div className="CartTrosak">
        <h4>Namirnice</h4>
        <p className="cardTrosakCena">
          <strong>400</strong> din
        </p>
        <ul>
          <li className="d-flex justify-content-between">
            <li>Paprike</li>
            <p className="px-3">100din</p>
          </li>
          <li className="d-flex justify-content-between">
            <li>Luk</li>
            <p className="px-3">100din</p>
          </li>
          <li className="d-flex justify-content-between">
            <li>Jabuke</li>
            <p className="px-3">100din</p>
          </li>
          <li className="d-flex justify-content-between">
            <li>Zelje</li>
            <p className="px-3">100din</p>
          </li>
          <li className="d-flex justify-content-between">
            <li>Zelje</li>
            <p className="px-3">100din</p>
          </li>
        </ul>
        <hr />
        <div className="d-flex justify-content-around cardFooter">
          <button className="btn btn-primary">Dodaj</button>
          <button className="btn border">Obrisi</button>
        </div>
      </div>
    </>
  );
}

export default CardTrosak;
