// Graph.js

// Add the "use client" directive at the top of your component file
"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Demo Line Plot',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Monthly Data',
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

function Graph() {
  return <Line data={data} options={options} />;
}

export default Graph;
