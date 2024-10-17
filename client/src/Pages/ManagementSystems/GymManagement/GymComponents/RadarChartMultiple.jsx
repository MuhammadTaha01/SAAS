import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChartMultiple = () => {
  const data = {
    labels: ['Strength', 'Speed', 'Endurance', 'Agility', 'Flexibility', 'Power'],
    datasets: [
      {
        label: 'Gym Member A',
        data: [65, 59, 90, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Transparent fill
        borderColor: 'rgba(255, 99, 132, 1)',  // Border color
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',  // Point color
      },
      {
        label: 'Gym Member B',
        data: [28, 48, 40, 19, 96, 27],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Transparent fill
        borderColor: 'rgba(54, 162, 235, 1)',  // Border color
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',  // Point color
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,  // Ensures that the radar chart starts at zero
      },
    },
    elements: {
      line: {
        tension: 0.1,  // Optional: Smooth out the lines between points
      },
    },
  };

  return (
    <div style={{ width: '250px', height: '200px' }} className='p-1 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChartMultiple;