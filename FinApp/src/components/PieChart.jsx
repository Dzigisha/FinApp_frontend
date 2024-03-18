// ./components/PieChart.js

import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
};

/**
 * Define a functional component named PieChart
 * that returns a Pie component from react-chartjs-2,
 */
const PieChart = ({ dataKategorije }) => {
  if (!dataKategorije) {
    return <div>Loading...</div>; // Optional: Render a loading indicator while data is being fetched
  }

  const data = {
    labels: dataKategorije.map((kategorija) => kategorija.naziv), // Array of category names
    datasets: [
      {
        data: dataKategorije.map((kategorija) =>
          kategorija.stavke.reduce((total, stavka) => total + stavka.cena, 0)
        ), // Array of total prices for each category
        backgroundColor: dataKategorije.map(() => getRandomColor()), // Generate random colors for each category
      },
    ],
  };

  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
};

// PieChart component is exported as default module.
export default PieChart;
