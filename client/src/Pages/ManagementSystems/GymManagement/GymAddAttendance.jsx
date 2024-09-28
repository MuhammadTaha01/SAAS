import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import axios from 'axios'

const GymAttendance = () => {

  const [studentData, setStudentData] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6969/view-student')
    .then(res => 
      setStudentData(res.data)
    )
    .catch(err => console.log(err))
  },[])

  const handleSumbit = (e) =>
  {
    e.preventDefault();
    console.log('sumbit btn is pressed')
    
    try 
    {
      axios.post('http://localhost:6969/add_attendance')
      .then(res => {
        setAttendance(res.data)
      })
      .catch(err => console.log(err))
    } 
    catch (error) 
    {
      console.log(err)
    }
  }

  return (
    <div className='flex'>
        <Sidebar/>

        <div className="mt-10 mx-10">
          <form onSubmit={handleSumbit}>
            <table className='border-collapse border border-gray-500'>
              <thead>
                <tr>
                  <th className='border border-gray-500 p-2'>id</th>
                  <th className='border border-gray-500 p-2'>Student Name</th>
                  <th className='border border-gray-500 p-2'>Attendance</th>
                </tr>
              </thead>

              <tbody>
                {studentData.map((student,index) => {
                  return(
                    <tr key={index}>
                        <td className='border border-gray-500 p-2'>{student.id || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_name || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'><input type="checkbox" name=""/></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className='mt-5 border whitespace-nowrap w-80 border-gray-500 p-2 rounded-xl font-semibold text-green-200 bg-green-800 hover:bg-green-600'>SAVE</button>
          </form>
        </div>
    </div>
  )
}

export default GymAttendance