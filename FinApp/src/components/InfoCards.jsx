import React from "react";

const getCurrentMonthExpenses = (kategorijaData) => {
  // Get the current year and month
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Month is zero-indexed, so add 1

  // Filter stavke for the current year and month
  const currentMonthStavke = kategorijaData.reduce(
    (accumulator, kategorija) => {
      kategorija.stavke.forEach((stavka) => {
        const [year, month] = stavka.datum.split("-").map(Number);
        if (year === currentYear && month === currentMonth) {
          accumulator.push(stavka);
        }
      });
      return accumulator;
    },
    []
  );

  // Calculate the total expenses for the current month
  const currentMonthExpenses = currentMonthStavke.reduce(
    (total, stavka) => total + Number(stavka.cena),
    0
  );
  return currentMonthExpenses;
};

const getLastMonthExpenses = (kategorijaData) => {
  // Get the last year and month
  const today = new Date();
  let lastYear = today.getFullYear();
  let lastMonth = today.getMonth(); // Month is zero-indexed

  // Adjust the last year and month if it's January
  if (lastMonth === 0) {
    lastYear -= 1;
    lastMonth = 12; // December is represented as 12
  }

  // Filter stavke for the last year and month
  const lastMonthStavke = kategorijaData.reduce((accumulator, kategorija) => {
    kategorija.stavke.forEach((stavka) => {
      const [year, month] = stavka.datum.split("-").map(Number);
      if (year === lastYear && month === lastMonth) {
        accumulator.push(stavka);
      }
    });
    return accumulator;
  }, []);

  // Calculate the total expenses for the last month
  const lastMonthExpenses = lastMonthStavke.reduce(
    (total, stavka) => total + Number(stavka.cena),
    0
  );
  return lastMonthExpenses;
};

const calculatePercentageChange = (currentMonthExpenses, lastMonthExpenses) => {
  if (lastMonthExpenses === 0) {
    return "N/A"; // Avoid division by zero
  }

  const change =
    ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100;
  return change.toFixed(2); // Return the percentage change rounded to two decimal places
};

const findMostExpensiveStavka = (kategorijaData) => {
  // Initialize variables to hold the most expensive stavka and its price
  let mostExpensiveStavka = null;
  let highestPrice = 0;

  // Iterate through all kategorijaData stavke
  kategorijaData.forEach((kategorija) => {
    kategorija.stavke.forEach((stavka) => {
      // Convert the stavka price to a number
      const price = Number(stavka.cena);
      // Check if the current stavka's price is higher than the highest price encountered so far
      if (price > highestPrice) {
        highestPrice = price;
        mostExpensiveStavka = stavka;
      }
    });
  });

  // Return the most expensive stavka
  return mostExpensiveStavka;
};

function InfoCards({ dataKategorije }) {
  const currentMonthExpenses = getCurrentMonthExpenses(dataKategorije);
  const lastMonthExpenses = getLastMonthExpenses(dataKategorije);
  const percentageChange = calculatePercentageChange(
    currentMonthExpenses,
    lastMonthExpenses
  );
  let najStavka = findMostExpensiveStavka(dataKategorije);
  let ovajMesecPotrosnja = getCurrentMonthExpenses(dataKategorije);
  return (
    <div>
      <div className="infoCard">
        <h3>{percentageChange}%</h3>
        <p>Potrosnja u odnosu na prosli mesec</p>
      </div>
      <div className="infoCard">
        <h3>{najStavka.cena} rsd</h3>
        <p>
          Najskuplja namirnica : <strong>{najStavka.naziv}</strong>{" "}
        </p>
      </div>
      <div className="infoCard">
        <h3>{ovajMesecPotrosnja} rsd</h3>
        <p>Potrosnja ovog meseca</p>
      </div>
    </div>
  );
}

export default InfoCards;
