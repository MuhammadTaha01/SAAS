import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Sidebar = () => {

  const { system, version } = useParams();
  const location = useLocation();
  const [ selectedOption, setSelectedOption ] = useState('');
  
  useEffect(() => {
    // Set selectedOption based on the current URL path
    const currentPath = location.pathname.split('/').pop();
    setSelectedOption(currentPath);
  }, [location]);

  const handleClick = () =>
  {
    window.location.reload();
  }

  const handleSelection = (option) =>
  {
    setSelectedOption(option);
  }
  
  return (
    <div className='border-[2px] border-black min-h-screen w-52 p-5 bg-blue-300'>
      
      <div className="">
        <Link to={`/products/${system}/${version}/dashboard`} onClick={handleClick}>
          <h1 className='font-semibold py-5 text-[20px]'>GymCrescentia</h1>
        </Link>
      </div>

      <div className="">

        <div className="flex flex-col gap-3 mb-[10%]">
           {/* Dashboard Option */}
           <Link to={`/products/${system}/${version}/dashboard`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'dashboard' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('dashboard')}
            >
              Dashboard
            </button>
          </Link>

          {/* Add Students Option */}
          <Link to={`/products/${system}/${version}/add-students`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'add-students' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('add-students')}
            >
              Add Students
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/view-students`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'view-students' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('view-students')}
            >
              View Students
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/fee-status`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'fee-status' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('fee-status')}
            >
              Fee Status
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/fine`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'fine' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('fine')}
            >
              Fine
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/external-services`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] whitespace-nowrap p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'external-services' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('external-services')}
            >
              External Services
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/ai-diet-plan`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'ai-diet-plan' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('ai-diet-plan')}
            >
              AI Diet Plan
            </button>
          </Link>

          {/* View Students Option */}
          <Link to={`/products/${system}/${version}/payment`} className='flex flex-col'>
            <button 
              className={`font-semibold text-[17px] p-2 my-2 rounded-xl hover:transition-all hover:duration-200 ${selectedOption === 'payment' ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`} 
              onClick={() => handleSelection('payment')}
            >
              Payment
            </button>
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