import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidebar = () => {

  const { system, version } = useParams();

  return (
    <div className='border-[2px] border-black min-h-screen w-52 p-5 bg-blue-300'>
      
      <div className="">
        <h1 className='font-semibold py-5 text-[20px]'>GymCrescentia</h1>
      </div>

      <div className="">

        <div className="flex flex-col gap-3 mb-[102%]">
          <Link to={`/products/${system}/${version}/dashboard`} className='flex flex-col'>
            <button className='font-semibold text-blue-900 rounded-xl text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>Dashboard</button>
          </Link>

          <Link to={`/products/${system}/${version}/add-students`} className='flex flex-col'>
            <button className='font-semibold text-blue-900 rounded-xl text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>Add Students</button>
          </Link>

          <Link to={`/products/${system}/${version}/view-students`} className='flex flex-col'>
            <button className='font-semibold text-blue-900 rounded-xl whitespace-nowrap text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>View Students</button>
          </Link>

          <Link to={`/products/${system}/${version}/fee-status`} className='flex flex-col'>
            <button className='font-semibold flex flex-col items-center whitespace-nowrap text-blue-900 rounded-xl text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>Fee Status</button>
          </Link>

          <Link to={`/products/${system}/${version}/payment`} className='flex flex-col'>
            <button className='font-semibold flex flex-col items-center whitespace-nowrap text-blue-900 rounded-xl text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>Payment</button>
          </Link>
        </div>

        <div className="flex flex-col">
          <button className='font-semibold text-blue-900 rounded-xl text-[17px] p-2 my-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>Settings</button>
          <Link to={`/products`} className='flex flex-col'>
            <button className='font-semibold text-blue-900 rounded-xl text-[17px] p-2 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200'>LogOut</button>
          </Link>
        </div>

      </div>
    
    </div>
  )
}

export default Sidebar