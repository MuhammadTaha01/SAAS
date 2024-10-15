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
    totalProfit: 0,
    totalLoss: 0,
    externalServices: 0
  })

  // Fetch data dynamically from the server using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Axios to fetch data from the backend
        const response = await axios.get('http://localhost:6969/view-student'); // Adjust the API endpoint accordingly
        const data = response.data;

        // Calculate the necessary values dynamically (for example, profit and loss)
        const totalStudents = data.length;
        
        const totalProfit = data.reduce((sum, student) => {
          const feePaid = student.feePaid ? parseFloat(student.feePaid) : 0; // Convert to number, default to 0 if undefined or null
          return sum + feePaid;
        }, 0);

        const totalLoss = data.reduce((sum, student) => sum + student.feeDue, 0);
        const externalServices = 5; // Example: Fetch or calculate from other data
        
        setGymData({
          totalStudents,
          totalProfit,
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

        <div className="flex items-center justify-center mt-3">
          <GymCards
            heading={'Total Students'}
            number={gymData.totalStudents}
            title={'Total Students in gym till now.'}
            />
          <GymCards
            heading={'Total Fee Collected'}
            number={gymData.totalProfit}
            title={'Total Profit of gym Or you may see total fee collected till now.'}
            />
          <GymCards
            heading={'Total Loss'}
            number={gymData.totalLoss}
            title={'Total Loss of gym till now.'}
            />
          <GymCards
            heading={'Total External-Services'}
            number={gymData.externalServices}
            title={'Total External Services gym has taken till now.'}
            />
          <GymCards
            heading={'Current Plan'}
            number={version}
            title={version}
          />
        </div>

        <div className="flex gap-28 mx-10 mt-5">
          {/* This is chart section */}
          <Pie/>
          <Line/>
          <Radar/>
        </div>

      </div>
    
    </div>
  )
}

export default GymDashboard