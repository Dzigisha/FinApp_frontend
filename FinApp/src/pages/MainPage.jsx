import { React, useState } from "react";
import ListGroup from "../components/ListGroup";
import NavBar from "../components/NavBar";
import PieChart from "../components/PieChart";
import CardTrosak from "../components/CardTrosak";
import GroupCardTrosak from "../components/GroupCardTrosak";
import FilterSection from "../components/FilterSection";
import BarChart from "../components/BarChart";
import InfoCards from "../components/InfoCards";

function MainPage() {
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState();
  const [dataKategorije, setDataKategorije] = useState();

  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="d-flex ">
          {dataKategorije && (
            <InfoCards
              className="  "
              dataKategorije={dataKategorije}
            ></InfoCards>
          )}
          {dataKategorije && (
            <PieChart className="ms-auto" dataKategorije={dataKategorije} />
          )}
          {dataKategorije && (
            <BarChart className="" dataKategorije={dataKategorije} />
          )}
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
