import React from 'react'

const Cards = ({heading,paragraph,price,onCardClick}) => {
  return (
    <div className='flex flex-col border-rose-400 items-center p-5 rounded-lg m-6 w-[500px] border-x-fuchsia-500 border-[3px]'>
        <img src="https://via.placeholder.com/150" alt="" className='w-32 h-32'/>
        <h1 className='font-semibold text-[20px] my-1'>{heading}</h1>
        <hr className='bg-gray-600 p-[1px] w-[350px] my-1 rounded-2xl'/>
        <h1 className='mx-10'>{paragraph}</h1>
        <hr className='bg-gray-600 p-[1px] w-[350px] my-3 rounded-2xl'/>
        <h1 className='font-semibold text-[20px] text-blue-800'>{price}</h1>
        <button className='w-28 bg-slate-500 rounded-2xl p-2 px-5 mt-3 hover:bg-slate-400 hover:text-white' onClick={onCardClick}>Start</button>
    </div>
  )
}

export default Cards