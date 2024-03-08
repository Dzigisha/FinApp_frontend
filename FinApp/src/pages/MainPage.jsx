import React from "react";
import ListGroup from "../components/ListGroup";
import NavBar from "../components/NavBar";
import PieChart from "../components/PieChart";
import CardTrosak from "../components/CardTrosak";
import GroupCardTrosak from "../components/GroupCardTrosak";
import FilterSection from "../components/FilterSection";
import BarChart from "../components/BarChart";

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
