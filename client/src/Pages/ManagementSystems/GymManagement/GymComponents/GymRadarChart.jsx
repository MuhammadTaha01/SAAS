import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Strength', 'Cardio', 'Flexibility', 'Endurance', 'Speed'],
    datasets: [
      {
        label: 'Gym Member Performance',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Gym Member',
        data: [25, 69, 50, 87, 50],
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div style={{ width: '250px', height: '250px' }} className='p-2 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      {/* Title Above the Radar Chart */}
      {/* <h2 className='text-center font-bold mb-4'>Gym Member Performance Analysis</h2> */}

      {/* Radar Chart */}
      <Radar data={data} title='This is radar data'/>
    </div>
  );
};

export default RadarChart;