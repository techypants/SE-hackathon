"use client";
import { useEffect, useState } from "react";

export default function jobTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/csv");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching CSV data:", error);
    }
    console.log(data);
  };

  return (
    <div>
      {/* Render CSV data */}
      <ul>
        {data.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}
