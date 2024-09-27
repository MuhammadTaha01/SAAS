import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'


const GymAddStudent = () => {

  const { system, version } = useParams();
  const [ studentData, setStudentData ] = useState([])

  useEffect(() => {
      axios.get('http://localhost:6969/view-student') 
        .then(res => {
          setStudentData(res.data);
        })
        .catch(err => console.log(err))
  },[])

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '100px'},
    { name: 'Student Name', selector: row => row.student_name || 'NULL'},
    { name: 'G-mail', selector: row => row.student_mail || 'NULL'},
    { name: 'Address', selector: row => row.student_address || 'NULL'},
    { name: 'Contact #01', selector: row => row.student_contact1 || 'NULL'},
    { name: 'Contact #02', selector: row => row.student_contact2 || 'NULL'},
    { name: 'Gender', selector: row => row.student_gender || 'NULL'},
    { name: 'Date Of Joining', selector: row => row.Date_of_joining ? new Date(row.Date_of_joining).toLocaleDateString() : 'NULL' }
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px'
      }
    },cells: {
      style: {
        border: '1px solid #ddd', // Add border to each cell
      }
    },
    rows: {
      style: {
        borderBottom: '1px solid #ddd', // Add border to each row
      }
    }
  }

  return (
    <div className='flex'>
      <Sidebar/>

      <div className="mt-10">
        <Link to={`/products/${system}/${version}/add`}>
          <button className='font-semibold text-[15px] mx-10 bg-green-400 text-green-800 border-[1px] border-green-800 rounded-xl px-5 p-1 hover:text-green-700 hover:bg-green-300 hover:transition-all duration-200'>Add Student</button>
        </Link>

        {/* <div className="flex items-center justify-center mt-5 mx-10"> */}
              {/* <table className='border-collapse border border-gray-500'>
                <thead>
                  <tr>
                    <th className='border border-gray-500 p-2'>id</th>
                    <th className='border border-gray-500 p-2'>Student Name</th>
                    <th className='border border-gray-500 p-2'>G-mail</th>
                    <th className='border border-gray-500 p-2'>Address</th>
                    <th className='border border-gray-500 p-2'>Contact # 01 </th>
                    <th className='border border-gray-500 p-2'>Contact # 02 </th>
                    <th className='border border-gray-500 p-2'>Gender</th>
                    <th className='border border-gray-500 p-2'>Date Of Joining</th>
                  </tr>
                </thead> */}

                <div className="mx-10 w-[110%] mt-5">
                  <DataTable
                    columns={columns}
                    data={studentData}
                    responsive
                    pagination
                    customStyles={customStyles}
                    highlightOnHover
                    selectableRows={false}
                  />
                </div>

                {/* <tbody>
                  {studentData.map((student,index) => {
                    return(
                        <tr key={index}>
                        <td className='border border-gray-500 p-2'>{student.id}</td>
                        <td className='border border-gray-500 p-2'>{student.student_name || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_mail || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_address || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_contact1 || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_contact2 || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.student_gender || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{student.Date_of_joining || 'NULL'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
          {/* </div> */}

      </div>
    

    </div>
  )
}

export default GymAddStudent