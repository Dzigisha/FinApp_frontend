import React, { useState, useEffect } from "react";
import CardTrosak from "./CardTrosak";
function GroupCardTrosak() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url =
    "https://fa1f510d-1d40-4912-9b85-30935d182b5b.mock.pstmn.io/namirnice";

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
    <div className="d-flex justify-content-around">
      {data.map((trosak) => {
        console.log(trosak);
        return <CardTrosak data={trosak} />;
      })}
    </div>
  );
}

export default GroupCardTrosak;
