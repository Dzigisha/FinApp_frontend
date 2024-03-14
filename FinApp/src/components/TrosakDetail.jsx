import React, { useState } from "react";

function TrosakDetail({
  stavka,
  onDelete,
  onEditStavka,
  indexKategorija,
  indexStavka,
}) {
  const [editStavka, setEditStavka] = useState({ ...stavka });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditStavka((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(editStavka);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    onDelete();
    console.log("Kliknuo obrisao");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditStavka(indexKategorija, indexStavka, editStavka);
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
              value={editStavka.naziv}
              name="naziv"
              onChange={handleChange}
            />
          </div>
          <div class="form-group m-3">
            <label for="inputCenaStavke">Cena stavke:</label>
            <input
              type="text"
              class="form-control "
              id="inputCenaStavke"
              placeholder="Cena stavke"
              value={editStavka.cena}
              name="cena"
              onChange={handleChange}
            />
          </div>
          <div class="form-group m-3">
            <label for="inputCenaStavke">Datum unosa:</label>
            <input
              type="text"
              class="form-control "
              id="inputCenaStavke"
              placeholder="Cena stavke"
              value={editStavka.datum}
              name="datum"
              onChange={handleChange}
            />
          </div>

          <button type="submit" class="btn btn-outline-info m-3">
            Izmeni
          </button>
          <button
            type="submit"
            onClick={handleDeleteClick}
            class="btn btn-danger m-3"
          >
            Izbrisi
          </button>
        </form>
      </div>
    </>
  );
}

export default TrosakDetail;
