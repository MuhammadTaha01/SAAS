import React from 'react'

const Cards = ({heading,onCardClick}) => {
  return (
    <div className='flex flex-col border-[1px] border-rose-400 items-center p-5 rounded-lg m-6'>
        <img src="https://via.placeholder.com/150" alt="" className='w-32 h-32'/>
        <h1 className='font-semibold'>{heading}</h1>
        <button className='w-28 bg-slate-500 rounded-xl' onClick={onCardClick}>Start</button>
    </div>
  )
}

export default Cards