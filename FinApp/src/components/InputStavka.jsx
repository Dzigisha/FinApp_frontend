import React from "react";
import { useState } from "react";

function InputStavka({ onInput, indexKategorija }) {
  const [naziv, setNaziv] = useState("");
  const [cena, setCena] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset form fields
    const now = new Date();
    const formattedDate = now.toJSON().substring(0, 10);

    // Update the state variable with the current date
    setCurrentDate(formattedDate);
    const newStavka = { naziv, cena, currentDate };
    console.log("Form submitted:", { naziv, cena, currentDate });
    onInput(indexKategorija, newStavka);
    setCena(0);
    setNaziv("");
  };

  return (
    <>
      <div className="inputStavka ">
        <form onSubmit={handleSubmit}>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Naziv stavke:</label>
            <input
              type="text"
              class="form-control"
              id="stavkaInput"
              placeholder="Unesite stavku"
              value={naziv}
              onChange={(event) => setNaziv(event.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="inputCenaStavke">Cena stavke</label>
            <input
              type="text"
              class="form-control "
              id="inputCenaStavke"
              placeholder="Cena stavke"
              value={cena}
              onChange={(event) => setCena(Number(event.target.value))}
            />
          </div>

          <button type="submit" class="btn btn-primary m-3">
            Dodaj
          </button>
        </form>
      </div>
    </>
  );
}

export default InputStavka;
