import React, { useEffect, useState } from "react";
import TrosakDetail from "./TrosakDetail";

function CardTrosak({
  data,
  indexKategorija,
  inputStavkaClick,
  detailStavkaClicked,
  refreshFlag,
  getIndexKategorijaCard,
  deleteKategorija,
}) {
  const [ukupnaCena, setUkupnaCena] = useState(0);

  const inputStavkaClickHandler = () => {
    getIndexKategorijaCard(indexKategorija);
    inputStavkaClick();
  };

  const deleteKategorijaHandler = () => {
    deleteKategorija(indexKategorija);
  };

  const handleDetailClick = (index) => {
    console.log(index, data.stavke[index]);
    detailStavkaClicked(data.stavke[index], indexKategorija, index);
  };

  useEffect(() => {
    let sum = 0;

    if (Object.keys(data.stavke).length == 1) {
      setUkupnaCena(Number(0));
    } else
      data.stavke.forEach((item) => {
        sum += Number(item.cena);
      });
    console.log("Prvi item :" + data.stavke[0].naziv, data.stavke[0].cena);
    console.log("Ovo je velicina niza " + Object.keys(data.stavke).length);
    setUkupnaCena(sum);
  }, [refreshFlag]);

  return (
    <>
      <div className="CartTrosak">
        <h4>
          {data.naziv} {indexKategorija}
        </h4>
        <p className="cardTrosakCena">
          <strong>{ukupnaCena}</strong> din
        </p>
        <ul>
          {data.stavke.map((stavka, index) => {
            if (Number(stavka.cena) === 0) {
              return <></>;
            }
            return (
              <div
                key={index}
                onClick={() => handleDetailClick(index)}
                className="d-flex justify-content-around "
              >
                <p>{index}</p>
                <p className="p-2">{stavka.naziv}</p>
                <p className="p-2">{stavka.cena}din</p>
              </div>
            );
          })}
        </ul>
        <hr />
        <div className="d-flex justify-content-around cardFooter">
          <button className="btn btn-primary" onClick={inputStavkaClickHandler}>
            Dodaj
          </button>
          <button className="btn border" onClick={deleteKategorijaHandler}>
            Obrisi
          </button>
        </div>
      </div>
    </>
  );
}

export default CardTrosak;
