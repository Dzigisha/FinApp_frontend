import { React, useState } from "react";
import ListGroup from "../components/ListGroup";
import NavBar from "../components/NavBar";
import PieChart from "../components/PieChart";
import CardTrosak from "../components/CardTrosak";
import GroupCardTrosak from "../components/GroupCardTrosak";
import FilterSection from "../components/FilterSection";
import BarChart from "../components/BarChart";

function MainPage() {
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState();
  const [dataKategorije, setDataKategorije] = useState();

  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          {/* {dataKategorije.map((kat) => {
            return <p>{kat.naziv}</p>;
          })} */}
          <PieChart dataKategorije={dataKategorije} />
          <BarChart />
        </div>
        <div className="d-flex justify-content-end">
          <FilterSection
            setSearchText={setSearchText}
            setFilterValue={setFilterValue}
          />
        </div>

        <hr></hr>

        <GroupCardTrosak
          searchText={searchText}
          filterValue={filterValue}
          setDataKategorije={setDataKategorije}
        />
      </div>
    </>
  );
}

export default MainPage;
