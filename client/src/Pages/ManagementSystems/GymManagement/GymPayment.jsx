import React from 'react'
import Sidebar from './GymComponents/Sidebar'

const GymPayment = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <button className='w-[30%] my-5 p-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-700 via-purple-400 to-pink-400
                               hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-purple-700 hover:border-[1px] hover:border-black hover:duration-500 hover:transition-all'>Payment via stripe</button>

            <button className='w-[30%] my-5 text-white bg-gradient-to-r from-red-500 via-red-400 to-orange-500 p-4 rounded-xl font-semibold
                               hover:bg-gradient-to-r hover:from-orange-500 hover:via-red-400 hover:to-red-500 hover:border-[1px] hover:border-black hover:duration-500 hover:transition-all'>Payment via JazzCash</button>

            <button className='w-[30%] my-5 text-white bg-gradient-to-r from-green-500 via-green-400 to-green-500 p-4 rounded-xl font-semibold
                               hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-400 hover:border-[1px] hover:border-black hover:duration-500 hover:transition-all'>Payment via EasyPaisa</button>

            <button className='w-[30%] my-5 text-white bg-gradient-to-r from-orange-500 via-red-400 to-orange-500 p-4 rounded-xl font-semibold
                               hover:bg-gradient-to-r hover:from-red-400 hover:via-orange-500 hover:to-red-400 hover:border-[1px] hover:border-black hover:duration-500 hover:transition-all'>Payment via NayaPay</button>

            <button className='w-[30%] my-5 text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 p-4 rounded-xl font-semibold
                               hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-400 hover:border-[1px] hover:border-black hover:duration-500 hover:transition-all'>Payment via Bank</button>
        </div>
    </div>
  )
}

export default GymPayment