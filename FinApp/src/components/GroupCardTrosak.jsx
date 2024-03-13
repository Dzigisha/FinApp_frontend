import React, { useState, useEffect } from "react";
import CardTrosak from "./CardTrosak";
import InputStavka from "./InputStavka";
import BackModal from "./BackModal";
import TrosakDetail from "./TrosakDetail";
function GroupCardTrosak() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClickedInputStavka, setIsClickedInputStavka] = useState(false);
  const [isClickedDetailStavka, setIsClickedDetailStavka] = useState(false);
  const [clickedStavka, setClickedStavka] = useState(null);
  const url =
    "https://fa1f510d-1d40-4912-9b85-30935d182b5b.mock.pstmn.io/troskovi";

  const inputStavkaClick = () => {
    setIsClickedInputStavka(true);
    console.log(isClickedInputStavka);
  };
  const closeInputStavka = () => {
    setIsClickedInputStavka(false);
    setIsClickedDetailStavka(false);
  };
  const detailStavkaClicked = (stavka) => {
    setIsClickedDetailStavka(true);
    setClickedStavka(stavka);
    console.log(stavka, "Otvori");
  };
  const closeStavkaDetail = () => {
    setIsClickedDetailStavka(false);
  };

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
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        {data.map((trosak, index) => {
          return (
            <CardTrosak
              key={index}
              indexKategorija={index}
              inputStavkaClick={inputStavkaClick}
              detailStavkaClicked={detailStavkaClicked}
              data={trosak}
            />
          );
        })}
      </div>
      {isClickedInputStavka === true && <InputStavka />}
      {(isClickedInputStavka === true || isClickedDetailStavka === true) && (
        <BackModal closeInputStavka={closeInputStavka} />
      )}
      {isClickedDetailStavka === true && (
        <TrosakDetail stavka={clickedStavka} />
      )}
    </>
  );
}

export default GroupCardTrosak;
