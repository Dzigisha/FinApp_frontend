import React, { useState, useEffect } from "react";
import CardTrosak from "./CardTrosak";
import InputStavka from "./InputStavka";
import BackModal from "./BackModal";
import TrosakDetail from "./TrosakDetail";
function GroupCardTrosak({ searchText, filterValue }) {
  //Stateovi
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClickedInputStavka, setIsClickedInputStavka] = useState(false);
  const [isClickedDetailStavka, setIsClickedDetailStavka] = useState(false);
  const [clickedStavka, setClickedStavka] = useState(null);
  const [clickedIndexKategorija, setClickedIndexKategorija] = useState(null);
  const [clickedIndexStavka, setClickedIndexStavka] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  // const [filteredData, setFilteredData] = useState();
  //URL API
  const url =
    "https://fa1f510d-1d40-4912-9b85-30935d182b5b.mock.pstmn.io/troskovi";

  //Funkcija za fetch podataka
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);

        // return await response.json();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const inputStavkaClick = () => {
    setIsClickedInputStavka(true);
  };
  const closeInputStavka = () => {
    setIsClickedInputStavka(false);
    setIsClickedDetailStavka(false);
  };
  const detailStavkaClicked = (stavka, indexKategorija, indexStavka) => {
    setIsClickedDetailStavka(true);
    setClickedStavka(stavka);
    setClickedIndexKategorija(indexKategorija);
    setClickedIndexStavka(indexStavka);
    console.log(stavka, indexKategorija, indexStavka);
  };

  const getIndexKategorijaCard = (indexKategorija) => {
    setClickedIndexKategorija(indexKategorija);
  };

  const addStavka = (indexKategorija, newStavka) => {
    const updatedTroskovi = [...data];
    updatedTroskovi[indexKategorija].stavke.push(newStavka);
    setData(updatedTroskovi);
    setIsClickedInputStavka(false);
    setRefreshFlag(!refreshFlag);
  };

  const editStavka = (indexKategorija, indexStavka, newData) => {
    const updatedTroskovi = [...data];
    updatedTroskovi[indexKategorija].stavke[indexStavka] = newData;
    setData(updatedTroskovi);
    setIsClickedDetailStavka(false);
    console.log(updatedTroskovi);

    setRefreshFlag(!refreshFlag);
  };

  const deleteStavka = (indexKategorija, indexStavka) => {
    const updatedTroskovi = [...data];
    updatedTroskovi[indexKategorija].stavke.splice(indexStavka, 1);
    setData(updatedTroskovi);
    setIsClickedDetailStavka(false);
    console.log(filterValue);
    setRefreshFlag(!refreshFlag);
  };

  const deleteKategorija = (indexKategorija) => {
    const updatedKategorije = [...data];
    updatedKategorije.splice(indexKategorija, 1);
    setData(updatedKategorije);
    setIsClickedDetailStavka(false);

    setRefreshFlag(!refreshFlag);
  };

  const addKategorija = (naziv) => {
    const updatedKategorije = [...data];
    const now = new Date();
    const datum_kreiranja = now.toJSON().substring(0, 10);
    let stavke = [
      {
        naziv: "",
        cena: 0,
      },
    ];

    const newKategorija = { naziv, stavke, datum_kreiranja };
    updatedKategorije.push(newKategorija);
    setData(updatedKategorije);
    setIsClickedInputStavka(false);
    setRefreshFlag(!refreshFlag);
  };
  let filteredData = data;

  useEffect(() => {
    // Trigger a refresh when sortOption changes

    setRefreshFlag(!refreshFlag);
  }, [filterValue, searchText]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  if (filterValue === "Skuplje") {
    filteredData.sort((a, b) => {
      const grossPriceA = a.stavke.reduce(
        (acc, curr) => acc + Number(curr.cena),
        0
      );
      const grossPriceB = b.stavke.reduce(
        (acc, curr) => acc + Number(curr.cena),
        0
      );
      return grossPriceB - grossPriceA; // Sort from highest to lowest gross price
    });
  }

  if (filterValue === "Jeftinije") {
    filteredData.sort((a, b) => {
      const grossPriceA = a.stavke.reduce(
        (acc, curr) => acc + Number(curr.cena),
        0
      );
      const grossPriceB = b.stavke.reduce(
        (acc, curr) => acc + Number(curr.cena),
        0
      );
      return grossPriceA - grossPriceB;
    });
  }

  if (filterValue === "Kasnije") {
    filteredData.sort((a, b) => {
      return new Date(a.datum_kreiranja) - new Date(b.datum_kreiranja); // Sort by earliest date
    });
  }
  if (filterValue === "Skorije") {
    filteredData.sort((a, b) => {
      return new Date(b.datum_kreiranja) - new Date(a.datum_kreiranja); // Sort by earliest date
    });
  }
  filteredData = data.filter((item) =>
    item.naziv.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="d-flex ">
        <button
          className="btn btn-primary"
          onClick={() => addKategorija("Proba")}
        >
          Dodaj novu kategoriju
        </button>
      </div>

      {/* Card deo  */}
      <div className="d-flex justify-content-around">
        {filteredData.map((trosak, index) => {
          return (
            <CardTrosak
              key={index}
              indexKategorija={index}
              inputStavkaClick={inputStavkaClick}
              detailStavkaClicked={detailStavkaClicked}
              data={trosak}
              deleteKategorija={deleteKategorija}
              getIndexKategorijaCard={getIndexKategorijaCard}
              refreshFlag={refreshFlag}
            />
          );
        })}
      </div>
      {isClickedInputStavka === true && (
        <InputStavka
          indexKategorija={clickedIndexKategorija}
          onInput={addStavka}
        />
      )}
      {(isClickedInputStavka === true || isClickedDetailStavka === true) && (
        <BackModal closeInputStavka={closeInputStavka} />
      )}
      {isClickedDetailStavka === true && (
        <TrosakDetail
          indexKategorija={clickedIndexKategorija}
          indexStavka={clickedIndexStavka}
          onEditStavka={editStavka}
          onDelete={() =>
            deleteStavka(
              clickedIndexKategorija,
              clickedIndexStavka,
              isClickedDetailStavka
            )
          }
          stavka={clickedStavka}
        />
      )}
    </>
  );
}

export default GroupCardTrosak;
