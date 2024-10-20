import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(BarElement, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        type: 'bar',
        label: 'Profit',
        data: [10, 20, 30, 40],
        backgroundColor: '#FF6384',
        hoverBackgroundColor: '#FF6384',
        borderRadius: 10,
        stack: 'combined', // Stack bars together
        order: 1, // Render bars first (lower order)
      },
      {
        type: 'bar',
        label: 'Loss',
        data: [15, 25, 35, 45],
        backgroundColor: '#36A2EB',
        hoverBackgroundColor: '#36A2EB',
        borderRadius: 10,
        stack: 'combined', // Stack bars together
        order: 2, // Render bars first (lower order)
      },
      {
        type: 'line',
        label: 'Net Income',
        data: [5, 15, 25, 35],
        borderColor: '#FFCE56',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4, // Adds smoothness to the line
        fill: false, // No fill under the line
        pointBorderColor: '#FFCE56',
        pointBackgroundColor: '#FFCE56',
        order: 3, // Render line on top (higher order)
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,  // Allows chart to fill the container
    scales: {
      x: {
        stacked: true,  // Stack the bar elements
      },
      y: {
        stacked: true,  // Stack the bar elements
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '250px' }} className='p-4 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarLineChart;