import React from 'react'
import Sidebar from './GymComponents/Sidebar'
import WelcomeBar from './GymComponents/WelcomeBar'
import GymCards from './GymComponents/GymCards'
import Pie from '../GymManagement/GymComponents/GymPieChart'
import Line from '../GymManagement/GymComponents/GymLineChart'
import Radar from '../GymManagement/GymComponents/GymRadarChart'


const GymDashboard = () => {
  
  return (
    <div className="flex">

      <Sidebar/>

      <div className="flex flex-col">
        <WelcomeBar/>

        <div className="flex items-center justify-center mt-3">
          <GymCards/>
          <GymCards/>
          <GymCards/>
          <GymCards/>
          <GymCards/>
        </div>

        <div className="flex gap-5 mx-10 mt-5">
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