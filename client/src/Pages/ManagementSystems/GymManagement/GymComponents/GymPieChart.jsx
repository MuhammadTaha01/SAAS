import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ profit, loss }) => {
  const data = {
    labels: ['Profit', 'Loss'],
    datasets: [
      {
        label: 'Gym Activities',
        data: [profit, loss],
        backgroundColor: ['#6bd392', '#9f46ed'],
        hoverBackgroundColor: ['#6bd392cf', '#9f46edc2'],
      },
    ],
  };

  return (
    <div style={{ width: '250px', height: '250px' }} className='p-4 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
        {/* <h2 className='text-center font-bold'>Profit and Loss</h2> */}
        <Pie data={data} title='This is piechart'/>
    </div>
  );
};

export default PieChart;
