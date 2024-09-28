import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import axios from 'axios'

const GymFeeStatus = () => {

    const [fee,setFee] = useState([])

    useEffect(() => {
        axios.get('http://localhost:6969/view-student')
        .then(res => setFee(res.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='flex'>
        <Sidebar/>

        <div className="mt-10 mx-10">
          <form>
            <table className='border-collapse border border-gray-500'>
              <thead>
                <tr>
                  <th className='border border-gray-500 p-2'>id</th>
                  <th className='border border-gray-500 p-2'>Student Name</th>
                  <th className='border border-gray-500 p-2'>Fee Status</th>
                  <th className='border border-gray-500 p-2'>Fee To be paid</th>
                  <th className='border border-gray-500 p-2'>Fee</th>
                  <th className='border border-gray-500 p-2'>Check Fee History</th>
                </tr>
              </thead>

              <tbody>
                {fee.map((Fee,index) => {
                  return(
                    <tr key={index}>
                        <td className='border border-gray-500 p-2'>{Fee.id || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{Fee.student_name || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{Fee.fee_status || 'Un-Paid'}</td>
                        <td className='border border-gray-500 p-2'>{Fee.fee || 'Not Entered Yet'}</td>
                        <td className='border border-gray-500 p-2'>
                            <select name="">
                                <option value="" disabled selected>Select</option>
                                <option value="paid">Paid</option>
                                <option value="un-paid">Un-Paid</option>
                            </select>
                        </td>
                        <td className='border border-gray-500 p-2'>
                            <button className='font-semibold text-[15px] mx-10 bg-pink-400 text-pink-800 border-[1px] border-pink-800 rounded-xl px-5 p-1 hover:text-pink-700 hover:bg-pink-300 hover:transition-all duration-200'>Check</button>
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className='mt-5 border whitespace-nowrap w-full border-gray-500 p-2 rounded-xl font-semibold text-green-200 bg-green-800 hover:bg-green-600'>SAVE</button>
          </form>
        </div>
    </div>
  )
}

export default GymFeeStatus