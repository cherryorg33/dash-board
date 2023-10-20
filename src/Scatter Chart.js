import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const API_URL = 'http://localhost:8000/datas';

const options = {
  scales: {
    x: {
      type: 'linear', // Use linear scale for x-axis
      position: 'bottom',
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.object))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [
      {
        label: 'likelihood ',
        data: data.map((item) => ({
          x: item.start_year, 
          y: item.likelihood, 
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Scatter Plot</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ScatterPlot;
