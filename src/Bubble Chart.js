import React, { useEffect, useState } from 'react';
import { Bubble } from 'react-chartjs-2';
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
      type: 'linear', 
      position: 'bottom',
    },
    y: {
      beginAtZero: true,
    },
}
};

const BubbleChart = () => {
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
        label: 'Bubble Chart',
        data: data.map((item) => ({
          x: item.start_year, 
          y: item.relavance, 
          r: item.likelihood, 
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <div>
      <h2>Bubble Chart</h2>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default BubbleChart;
