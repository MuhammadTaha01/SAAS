import React, { useState,useEffect } from 'react'
import Sidebar from './GymComponents/Sidebar'
import WelcomeBar from './GymComponents/WelcomeBar'
import GymCards from './GymComponents/GymCards'
import Pie from '../GymManagement/GymComponents/GymPieChart'
import Line from '../GymManagement/GymComponents/GymLineChart'
import Radar from '../GymManagement/GymComponents/GymRadarChart'
import BarChart from '../GymManagement/GymComponents/GymBarChart'
import StackedBarChart from './GymComponents/GymStackedBarChart'
import StackedBarLineChart from './GymComponents/GymStackedBarLineChart'
import TimeScaleComboChart from './GymComponents/RadarChartMultiple'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const GymDashboard = () => {
  const { version } = useParams();

  const [gymData, setGymData] = useState({
    totalStudents: 0,
    totalFeeCollected: 0,
    totalLoss: 0,
    externalServices: 0,
    externalServicesCost: 0 // New field for the total cost of external services
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data
        const studentResponse = await axios.get('http://localhost:6969/view-student');
        const studentData = studentResponse.data;
        console.log('Student Data:', studentData);  // Log student data
  
        // Calculate total students and fee collected
        const totalStudents = studentData.length;
        const totalFeeCollected = studentData.reduce((sum, student) => {
          const fee = student.fee ? parseFloat(student.fee) : 0;
          return sum + fee;
        }, 0);
  
        // Calculate total loss from student data (feeDue)
        const studentLoss = studentData.reduce((sum, student) => {
          const feeDue = student.feeDue ? parseFloat(student.feeDue) : 0;
          return sum + feeDue;
        }, 0);
        console.log('Student Loss (feeDue):', studentLoss);  // Log student loss
  
        // Fetch external services data
        const externalServicesResponse = await axios.get('http://localhost:6969/gym_externalservices');
        const externalServicesData = externalServicesResponse.data;
        console.log('External Services Data:', externalServicesData);  // Log external services data
  
        // Calculate total number of external services and total cost
        const totalExternalServices = externalServicesData.length;
        const totalExternalServicesCost = externalServicesData.reduce((sum, service) => {
          const serviceCost = service.service_fee ? parseFloat(service.service_fee) : 0;  // Use correct field
          return sum + serviceCost;
        }, 0);
        console.log('External Services Cost:', totalExternalServicesCost);  // Log external services cost
  
        // Calculate total loss (student feeDue + external service costs)
        const totalLoss = studentLoss + totalExternalServicesCost;
        console.log('Total Loss:', totalLoss);  // Log the combined total loss
  
        // Update gymData state with the new values
        setGymData({
          totalStudents,
          totalFeeCollected,
          totalLoss, // Updated total loss with studentLoss and external service costs
          externalServices: totalExternalServices,
          externalServicesCost: totalExternalServicesCost
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

        <div className="flex gap-14 mt-4 mx-10">
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
            number={`Rs. ${gymData.totalLoss}`}
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

        <div className="flex flex-col mx-10 mt-1">
          <div className="font-semibold my-2">
            Your Gym <span className='text-purple-600 hover:underline hover:text-purple-700'>MRR(Monthly Recurring Revenue)</span>
          </div>
          <div className="flex gap-24">
            {/* This is chart section */}
            <Pie/>
            <Line/>
            <Radar/>
          </div>
        </div>

        <div className="flex flex-col mx-10 mt-1 mb-3">
          <div className="font-semibold my-2">
            Your Gym <span className='text-green-600 hover:underline hover:text-green-700'>ARR(Annualy Recurring Revenue)</span>
          </div>
          <div className="flex gap-5">
            {/* This is chart section */}
            <BarChart/>
            <StackedBarChart/>
            <StackedBarLineChart/>
            <TimeScaleComboChart/>
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default GymDashboard