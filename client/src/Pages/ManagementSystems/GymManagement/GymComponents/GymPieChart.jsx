import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Profit', 'Loss'],
    datasets: [
      {
        label: 'Gym Activities',
        data: [12, 19],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '250px' }} className='p-4 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
        {/* <h2 className='text-center font-bold'>Profit and Loss</h2> */}
        <Pie data={data} title='This is piechart'/>
    </div>
  );
};

export default PieChart;
