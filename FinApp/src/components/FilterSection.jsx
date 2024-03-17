import { React, useState } from "react";

function FilterSection({ setSearchText, setFilterValue }) {
  const onChangeHandlerForm = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };
  const onClickFilterValue = (filterValue) => {
    setFilterValue(filterValue);
  };

  return (
    <>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="text"
          onChange={onChangeHandlerForm}
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sortiraj
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            className="dropdown-item"
            type="button"
            onClick={() => onClickFilterValue("Skuplje")}
          >
            Skuplje
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => onClickFilterValue("Jeftinije")}
          >
            Jeftinije
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => onClickFilterValue("Skorije")}
          >
            Skorije
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => onClickFilterValue("Kasnije")}
          >
            Kasnije
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
