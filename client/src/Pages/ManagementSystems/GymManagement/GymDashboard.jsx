import React from 'react'
import Sidebar from './GymComponents/Sidebar'
import WelcomeBar from './GymComponents/WelcomeBar'
import GymCards from './GymComponents/GymCards'

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

      </div>
    
    </div>
  )
}

export default GymDashboard