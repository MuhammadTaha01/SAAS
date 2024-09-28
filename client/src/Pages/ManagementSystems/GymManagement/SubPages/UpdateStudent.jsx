import React from 'react'
import { Link, useParams } from 'react-router-dom'


const UpdateStudent = () => {

  const { system, version } = useParams();

  const handleSumbit = (e) =>
  {
    e.preventDefault();
  }

  return (
    <div className=''>

        <div className="flex flex-col">

          <div className="mt-10">
            <Link to={`/products/${system}/${version}/view-students`}>
              <button className='font-semibold text-[15px] mx-10 bg-purple-400 text-purple-800 border-[1px] border-purple-800 rounded-xl px-5 p-1 hover:text-purple-700 hover:bg-purple-300 hover:transition-all duration-200'> Back </button>
            </Link>
          </div>

          <div className="flex items-center flex-wrap bg-gray-100 justify-center mt-5 border-[3px] rounded-xl border-gray-800 mx-10 p-2 gap-8 hover:bg-gray-200">
            <form onSubmit={handleSumbit} className='flex gap-8 flex-wrap items-center justify-center'>
              <div className="flex flex-col">
                <label className='font-semibold'>Student Name:</label>
                <input
                  required
                  type="text" 
                  name="student_name"
                  placeholder='Taha,Ali...' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student G-mail: (Optional)</label>
                <input
                  type="text" 
                  name="mail"
                  placeholder='xyz@gmail.com' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Address:</label>
                <input
                  required
                  type="text"
                  name="student_address"
                  placeholder='Street | City' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Contact # 01:</label>
                <input
                  required
                  type="text" 
                  name="student_contact1"
                  placeholder='+XX XXXXXXXXXXX' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Contact # 02: (Optional)</label>
                <input 
                  type="text" 
                  name="student_contact2"
                  placeholder='+XX XXXXXXXXXXX' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Fee:</label>
                <input
                  required
                  type="text" 
                  name="fee"
                  placeholder='12345' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Gender:</label>
                <select
                  required
                  name="student_gender"
                  className='border-[2px] border-gray-950'
                >
                  <option value="" disabled selected>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <button className='font-semibold w-full text-[15px] mx-10 bg-purple-400 text-purple-800 border-[1px] border-purple-800 rounded-xl px-5 p-1 hover:text-purple-700 hover:bg-purple-300 hover:transition-all duration-200'>Update</button>
            </form>

          </div>

        </div>

    </div>
  )
}

export default UpdateStudent