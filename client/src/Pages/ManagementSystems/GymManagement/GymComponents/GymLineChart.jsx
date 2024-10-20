import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ data, labels }) => {
  const chartData = {
    labels: labels, // Use the passed labels
    datasets: [
      {
        label: 'Progress Over Time',
        data: data, // Use the passed data
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.4, // Adds smoothness to the line
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '200px' }} className='p-1 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;