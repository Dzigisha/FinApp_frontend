import React, { useEffect, useState } from "react";

function CardTrosak({ data, inputStavkaClick }) {
  const [ukupnaCena, setUkupnaCena] = useState(0);
  let { naziv, stavke } = data;
  const { items, setItems } = useState();
  const inputStavkaClickHandler = () => {
    inputStavkaClick();
  };

  const [checkedItems, setCheckedItems] = useState(
    new Array(stavke.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleDelete = () => {
    const updatedItems = stavke.filter((item, index) => !checkedItems[index]);
    stavke = updatedItems;
    setCheckedItems(new Array(stavke.length).fill(false));

    console.log(checkedItems);
  };

  useEffect(() => {
    let sum = 0;

    stavke.forEach((item) => {
      sum += item.cena;
    });
    setUkupnaCena(sum);
    console.log(stavke);
  }, []);

  return (
    <>
      <div className="CartTrosak">
        <h4>{naziv}</h4>
        <p className="cardTrosakCena">
          <strong>{ukupnaCena}</strong> din
        </p>
        <ul>
          {stavke.map((stavka, index) => {
            return (
              <div key={index} className="d-flex ">
                <div class=" mr-auto p-2">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label class="form-check-label" for="inlineCheckbox1"></label>
                </div>

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
          <button className="btn border" onClick={handleDelete}>
            Obrisi
          </button>
        </div>
      </div>
    </>
  );
}

export default CardTrosak;
