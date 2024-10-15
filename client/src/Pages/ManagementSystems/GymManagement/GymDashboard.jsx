import React from 'react'
import Sidebar from './GymComponents/Sidebar'
import WelcomeBar from './GymComponents/WelcomeBar'
import GymCards from './GymComponents/GymCards'
import Pie from '../GymManagement/GymComponents/GymPieChart'
import Line from '../GymManagement/GymComponents/GymLineChart'
import Radar from '../GymManagement/GymComponents/GymRadarChart'
import { useParams } from 'react-router-dom'


const GymDashboard = () => {
  const { version } = useParams();

  return (
    <div className="flex">

      <Sidebar/>

      <div className="flex flex-col">
        <WelcomeBar/>

        <div className="flex items-center justify-center mt-3">
          <GymCards
            heading={'Total Students'}
            number={10}
            title={'Total Students in gym till now.'}
            />
          <GymCards
            heading={'Total Profit'}
            number={10}
            title={'Total Profit of gym till now.'}
            />
          <GymCards
            heading={'Total Loss'}
            number={10}
            title={'Total Loss of gym till now.'}
            />
          <GymCards
            heading={'Total External-Services'}
            number={10}
            title={'Total External Services gym has taken till now.'}
            />
          <GymCards
            heading={'Current Plan'}
            number={version}
            title={version}
          />
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