import { React, useState, useEffect } from "react";
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

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
};

function BarChart({ dataKategorije }) {
  const getMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1]; // Month is zero-indexed, so we subtract 1
  };

  const calculateMonthlySpending = (kategorijaData) => {
    const monthlySpending = {};

    kategorijaData.forEach((kategorija) => {
      kategorija.stavke.forEach((stavka) => {
        const date = new Date(stavka.datum); // Assuming date is in format "yyyy-mm-dd"
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
        const monthName = getMonthName(month);
        const key = `${year}-${monthName}`; // Use year and month name as the key

        // Initialize the total spending for the month if it doesn't exist
        if (!monthlySpending[key]) {
          monthlySpending[key] = 0;
        }

        // Accumulate the spending for the month
        monthlySpending[key] += Number(stavka.cena);
      });
    });

    return monthlySpending;
  };

  const monthlySpending = calculateMonthlySpending(dataKategorije);

  // Extract keys (months) and values (spending totals) from monthlySpending object
  const labels = Object.keys(monthlySpending);
  const data = Object.values(monthlySpending);

  // Generate random color for each bar
  const backgroundColors = labels.map(() => getRandomColor());

  // Create the chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Spending",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <div className="chart pt-5">
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
