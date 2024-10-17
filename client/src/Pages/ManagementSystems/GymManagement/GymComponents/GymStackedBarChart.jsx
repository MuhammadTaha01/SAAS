import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Register components
Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const StackedBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Profit',
        data: [10, 20, 30, 40],
        backgroundColor: '#FF6384',
        hoverBackgroundColor: '#FF6384',
        borderRadius: 10,
      },
      {
        label: 'Loss',
        data: [15, 25, 35, 45],
        backgroundColor: '#36A2EB',
        hoverBackgroundColor: '#36A2EB',
        borderRadius: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,  // Allows chart to fill the container
    scales: {
      x: {
        stacked: true,  // Enable stacking on the x-axis
      },
      y: {
        stacked: true,  // Enable stacking on the y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '200px' }} className='p-4 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;