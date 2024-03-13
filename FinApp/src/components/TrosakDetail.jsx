import React from "react";

function TrosakDetail({ stavka }) {
  return (
    <>
      <div className="inputStavka ">
        <form>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Naziv stavke:</label>
            <input
              type="text"
              class="form-control"
              id="stavkaInput"
              placeholder="Unesite stavku"
              value={stavka.naziv}
            />
          </div>
          <div class="form-group m-3">
            <label for="inputCenaStavke">Cena stavke:</label>
            <input
              type="text"
              class="form-control "
              id="inputCenaStavke"
              placeholder="Cena stavke"
              value={stavka.cena}
            />
          </div>

          <button type="submit" class="btn btn-outline-info m-3">
            Izmeni
          </button>
          <button type="submit" class="btn btn-danger m-3">
            Izbrisi
          </button>
        </form>
      </div>
    </>
  );
}

export default TrosakDetail;
