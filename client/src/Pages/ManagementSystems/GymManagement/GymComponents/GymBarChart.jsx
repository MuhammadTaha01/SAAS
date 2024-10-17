import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Register components
Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ['Profit', 'Loss'],
    datasets: [
      {
        label: 'Gym Activities',
        data: [10,15],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderRadius: 10, // This adds rounded corners to the bars
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '200px' }} className='p-1 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;