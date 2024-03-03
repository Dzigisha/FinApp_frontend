import React from "react";
import ListGroup from "../ListGroup";
import NavBar from "../NavBar";
import PieChart from "../PieChart";
import CardTrosak from "../CardTrosak";
import GroupCardTrosak from "../GroupCardTrosak";
import FilterSection from "../FilterSection";
import BarChart from "../BarChart";

function MainPage() {
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <PieChart />
          <BarChart />
        </div>
        <div className="d-flex justify-content-end">
          <FilterSection />
        </div>

        <hr></hr>

        <GroupCardTrosak />
      </div>
    </>
  );
}

export default MainPage;
