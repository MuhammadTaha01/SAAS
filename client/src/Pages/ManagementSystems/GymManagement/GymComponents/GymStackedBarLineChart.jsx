// GymStackedBarLineChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarLineChart = ({ monthlyProfits = [], monthlyLosses = [] }) => {
  const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
          {
              type: 'bar',
              label: 'Profit',
              data: monthlyProfits,
              backgroundColor: '#FF6384',
              hoverBackgroundColor: '#FF6384',
              borderRadius: 10,
              stack: 'combined',
              order: 1,
          },
          {
              type: 'bar',
              label: 'Loss',
              data: monthlyLosses,
              backgroundColor: '#36A2EB',
              hoverBackgroundColor: '#36A2EB',
              borderRadius: 10,
              stack: 'combined',
              order: 2,
          },
          {
              type: 'line',
              label: 'Net Income',
              data: monthlyProfits.map((profit, index) => profit - monthlyLosses[index]),
              borderColor: '#FFCE56',
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.4,
              fill: false,
              pointBorderColor: '#FFCE56',
              pointBackgroundColor: '#FFCE56',
              order: 3,
          },
      ],
  };

  const options = {
      maintainAspectRatio: false,
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true,
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


// Make sure to export as default
export default StackedBarLineChart;