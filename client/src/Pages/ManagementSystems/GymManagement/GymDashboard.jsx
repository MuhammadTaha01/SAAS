import React, { useState,useEffect } from 'react'
import Sidebar from './GymComponents/Sidebar'
import WelcomeBar from './GymComponents/WelcomeBar'
import GymCards from './GymComponents/GymCards'
import Pie from '../GymManagement/GymComponents/GymPieChart'
import Line from '../GymManagement/GymComponents/GymLineChart'
import Radar from '../GymManagement/GymComponents/GymRadarChart'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const GymDashboard = () => {
  const { version } = useParams();

  const [gymData, setGymData] = useState({
    totalStudents: 0,
    totalFeeCollected: 0,
    totalLoss: 0,
    externalServices: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/view-student'); // Adjust the API endpoint accordingly
        const data = response.data;
  
        console.log(data); // Log to inspect the data structure
  
        // Calculate the necessary values dynamically
        const totalStudents = data.length;
  
        // Sum the feePaid (converted to number) for all students
        const totalFeeCollected = data.reduce((sum, student) => {
          const fee = student.fee ? parseFloat(student.fee) : 0; // Handle case where fee is null or undefined
          return sum + fee;
        }, 0);
  
        const totalLoss = data.reduce((sum, student) => {
          // Assuming 'feeDue' or other fields represent the loss, adjust accordingly
          const feeDue = student.feeDue ? parseFloat(student.feeDue) : 0;
          return sum + feeDue;
        }, 0);
  
        const externalServices = 5; // Example: Fetch or calculate from other data
        
        setGymData({
          totalStudents,
          totalFeeCollected,
          totalLoss,
          externalServices,
        });
      } catch (error) {
        console.error('Error fetching gym data:', error);
      }
    };
  
    fetchData();
  }, []);  // Empty dependency array to run only on component mount
  


  return (
    <div className="flex">

      <Sidebar/>

      <div className="flex flex-col">
        <WelcomeBar/>

        <div className="flex gap-16 mt-3 mx-10">
          <GymCards
            heading={'Total Students'}
            number={gymData.totalStudents}
            title={'Total Students in gym till now.'}
          />
          <GymCards
            heading={'Total Fee Collected/Profit'}
            number={`Rs. ${gymData.totalFeeCollected}`}
            title={'Total Profit of gym Or you may see total fee collected till now.'}
          />
          <GymCards
            heading={'Total Loss'}
            number={gymData.totalLoss}
            title={'Total Loss of gym till now.'}
          />
          <GymCards
            heading={'External-Services'}
            number={gymData.externalServices}
            title={'Total External Services gym has taken till now.'}
          />
          <GymCards
            heading={'Current Plan'}
            number={version}
            title={version}
          />
        </div>

        <div className="flex flex-col mx-10 mt-5">
          <div className="font-semibold my-2">
            Your Gym <span className='text-purple-700 hover:underline'>MRR(Monthly Recurring Revenue)</span>
          </div>
          <div className="flex gap-28">
            {/* This is chart section */}
            <Pie/>
            <Line/>
            <Radar/>
          </div>
        </div>

        <div className="flex flex-col mx-10 mt-5">
          <div className="font-semibold my-2">
            Your Gym <span className='text-purple-700 hover:underline'>ARR(Annualy Recurring Revenue)</span>
          </div>
          <div className="flex gap-28">
            {/* This is chart section */}
            <Pie/>
            <Line/>
            <Radar/>
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default GymDashboard