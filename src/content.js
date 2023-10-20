import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function ChartComponent() {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    // Fetch data from your backend API
    axios.get('http://127.0.0.1:8000/data')
      .then((response) => {
        const data = response.data; // Replace with your data structure
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Data from Backend',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize chart colors
              borderColor: 'rgba(75, 192, 192, 1)', // Customize chart colors
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] ensures that this effect runs once when the component mounts

  return (
    <div>
      <h2>Data from Backend in Chart.js</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default ChartComponent;
