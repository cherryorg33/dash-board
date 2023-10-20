import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

const API_URL = 'http://localhost:8000/datas';



const PieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.object))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
     labels: data.map((item) => item.country),
    
    datasets: [
      {
        label: 'Intensity',
        data: data.map((item) => item.intensity),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
        borderColor: ['rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',],
        borderWidth: 1,
      },
      
    ],
  };
  const centerStyle = {
    width: '700px',
    height: '700px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',     
  };

  return (
    <div>
      <h2>PieChart</h2>
      <div style={centerStyle}>
      <Pie data={chartData} />
    </div>
      
    </div>
  );
};

export default PieChart;