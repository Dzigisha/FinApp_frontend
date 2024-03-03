import React from "react";

function FilterSection() {
  return (
    <>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
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
          <button className="dropdown-item" type="button">
            Skuplje
          </button>
          <button className="dropdown-item" type="button">
            Jeftinije
          </button>
          <button className="dropdown-item" type="button">
            Skorije
          </button>
          <button className="dropdown-item" type="button">
            Kasnije
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
