// ./components/PieChart.js

import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.

// Define an array of labels.
const labels = [
  "Namirnice",
  "Auto",
  "Pretplate",
  "Kupovina",
  "Stan",
  "Racuni",
  "Ostalo",
];

// Defined an object.
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 120, 132)",
        "rgb(200, 90, 132)",
        "rgb(100, 80, 100)",
        "rgb(255, 0, 132)",
        "rgb(255, 100, 0)",
        "rgb(0, 110, 132)",
        "rgb(100, 60, 132)",
        "rgb(255, 50, 100)",
      ],
      borderColor: "rgb(255,255,255)",
      data: [1000, 1000, 500, 2000, 2000, 3000, 4500, 1500],
    },
  ],
};

/**
 * Define a functional component named PieChart
 * that returns a Pie component from react-chartjs-2,
 */
const PieChart = () => {
  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
};

// PieChart component is exported as default module.
export default PieChart;
