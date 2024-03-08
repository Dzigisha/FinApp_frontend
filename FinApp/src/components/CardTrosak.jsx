import React, { useEffect, useState } from "react";

function CardTrosak({ data }) {
  const [ukupnaCena, setUkupnaCena] = useState(0);
  const { naziv, namirnice } = data;

  useEffect(() => {
    let sum = 0;

    namirnice.forEach((item) => {
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
          {namirnice.map((namirnica) => {
            return (
              <li className="d-flex justify-content-between">
                <li>{namirnica.naziv}</li>
                <p className="px-3">{namirnica.cena}din</p>
              </li>
            );
          })}
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
