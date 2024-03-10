import React from "react";
import BackModal from "./BackModal";

function InputStavka() {
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
            />
          </div>
          <div class="form-group m-3">
            <label for="inputCenaStavke">Cena stavke</label>
            <input
              type="text"
              class="form-control "
              id="inputCenaStavke"
              placeholder="Cena stavke"
            />
          </div>

          <button type="submit" class="btn btn-primary m-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default InputStavka;
