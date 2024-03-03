import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

function BarChart() {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "369",
        data: [3, 6, 9, 12, 15, 18, 21],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart pt-5">
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
