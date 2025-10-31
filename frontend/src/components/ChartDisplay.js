import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartDisplay({ data }) {
  const keys = Object.keys(data[0]);
  const xKey = keys[0];
  const yKey = keys[1];

  const chartData = {
    labels: data.map((row) => row[xKey]),
    datasets: [
      {
        label: yKey,
        data: data.map((row) => row[yKey]),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Generated Chart</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default ChartDisplay;