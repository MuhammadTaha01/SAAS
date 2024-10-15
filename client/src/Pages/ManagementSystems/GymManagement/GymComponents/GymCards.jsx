import React from 'react'

const GymCards = ({heading,number,title}) => {
  return (
    <div className='flex flex-col p-3 px-8 border-[1px] bg-blue-200 border-gray-400 rounded-xl hover:bg-blue-300'>

        <div className="" title={title}>
          <h1 className='font-semibold'>{heading}</h1>
          <h3>{number}</h3>
        </div>

    </div>
  )
}

export default GymCards