import React, { useEffect, useState } from "react";

function CardTrosak({ data, inputStavkaClick }) {
  const [ukupnaCena, setUkupnaCena] = useState(0);
  const { naziv, stavke } = data;

  const inputStavkaClickHandler = () => {
    inputStavkaClick();
  };

  useEffect(() => {
    let sum = 0;

    stavke.forEach((item) => {
      sum += item.cena;
    });
    setUkupnaCena(sum);
  }, []);

  return (
    <>
      <div className="CartTrosak">
        <h4>{naziv}</h4>
        <p className="cardTrosakCena">
          <strong>{ukupnaCena}</strong> din
        </p>
        <ul>
          {stavke.map((stavka) => {
            return (
              <li className="d-flex justify-content-between">
                <li>{stavka.naziv}</li>
                <p className="px-3">{stavka.cena}din</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <div className="d-flex justify-content-around cardFooter">
          <button className="btn btn-primary" onClick={inputStavkaClickHandler}>
            Dodaj
          </button>
          <button className="btn border">Obrisi</button>
        </div>
      </div>
    </>
  );
}

export default CardTrosak;
