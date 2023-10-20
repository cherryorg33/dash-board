import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data from the Flask backend
    axios.get('http://127.0.0.1:8000/datas')
      .then((response) => {
        const data = response.data;
        const intensity = data.map(item => item.intensity);
        const likelihood = data.map(item => item.likelihood);
        const relevance = data.map(item => item.relevance);
        const start_years = data.map(item => item.start_years);

        setChartData({
          labels: start_years,
          datasets: [
            {
              label: 'Intensity',
              data: intensity,
              fill: false,
              borderColor: 'red',
            },
            {
              label: 'Likelihood',
              data: likelihood,
              fill: false,
              borderColor: 'blue',
            },
            {
              label: 'Relevance',
              data: relevance,
              fill: false,
              borderColor: 'green',
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Line Chart</h1>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;



