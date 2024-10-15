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

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Progress Over Time',
        data: [10,30,50,70,90,100],
        fill: false,
        borderColor: '#4bc0c0',
      },
    ],
  };

  return (
    <div style={{ width: '500px', height: '250px' }} className='p-1 flex justify-center border-[1px] border-black rounded-3xl hover:bg-blue-100 hover:transition-all'>
        {/* <h2 className='text-center font-bold'>Business Growth</h2> */}
        <Line data={data} title='This is LineChart'/>
    </div>
  );
};

export default LineChart;
