import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const API_URL = 'http://localhost:8000/datas';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.object))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
     labels: data.map((item) => item.country),
    // labels: data.map((item) => item.start_year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map((item) => item.intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'relavance',
        data: data.map((item) => item.relevance),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Graph</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

