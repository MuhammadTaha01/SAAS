import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { Link, useParams } from 'react-router-dom'


const GymViewStudent = () => {

  const [ studentData, setStudentData ] = useState([])
  const [filteredData, setFilteredData] = useState([]); // <-- Missing state declaration
  const { system, version } = useParams();

  useEffect(() => {
      axios.get('http://localhost:6969/view-student') 
        .then(res => {
          setStudentData(res.data);
          setFilteredData(res.data);
        })
        .catch(err => console.log(err))
  },[])

  const handleUpdate = (id) =>
  {
    console.log(id);
  }

  const handleDelete = (id) =>
  {
    if(window.confirm('Are you sure you want to delete this student?'))
    {
      axios.delete(`http://localhost:6969/delete-student/${id}`)
      .then((res) => {
        console.log(res.data)
        // Update the state after successful deletion
        setStudentData(studentData.filter(student => student.id !== id));
        setFilteredData(filteredData.filter(student => student.id !== id));
      })
      .catch((err) => console.log(err))
    }
  }
  


  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '70px' },
    { 
      name: 'Student Name', 
      selector: row => row.student_name || 'NULL', 
      width: '100px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_name || 'NULL'}</div>
    },
    { 
      name: 'G-mail', 
      selector: row => row.student_mail || 'NULL', 
      width: '230px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_mail || 'NULL'}</div>
    },
    { 
      name: 'Address', 
      selector: row => row.student_address || 'NULL', 
      width: '200px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_address || 'NULL'}</div>
    },
    { 
      name: 'Contact #01', 
      selector: row => row.student_contact1 || 'NULL', 
      width: '120px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_contact1 || 'NULL'}</div>
    },
    { 
      name: 'Contact #02', 
      selector: row => row.student_contact2 || 'NULL', 
      width: '120px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_contact2 || 'NULL'}</div>
    },
    { 
      name: 'Gender', 
      selector: row => row.student_gender || 'NULL', 
      width: '80px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.student_gender || 'NULL'}</div>
    },
    { 
      name: 'Fee', 
      selector: row => row.fee || 'NULL', 
      width: '80px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.fee || 'NULL'}</div>
    },
    { 
      name: 'Date Of Joining', 
      selector: row => row.Date_of_joining ? new Date(row.Date_of_joining).toLocaleDateString() : 'NULL', 
      width: '120px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.Date_of_joining ? new Date(row.Date_of_joining).toLocaleDateString() : 'NULL'}</div>
    },
    {
      name: 'Actions',
      width: '150px',
      cell: row => (
        <div className="flex gap-2" style={{ whiteSpace: 'normal' }}>
          <Link to={`/products/${system}/${version}/update/${row.id}`}>
            <button
              className="border whitespace-nowrap border-gray-500 p-2 rounded-xl font-semibold text-purple-200 bg-purple-800 hover:bg-purple-600"
              onClick={() => handleUpdate(row.id)}
              >
              Update
            </button>
          </Link>
          <button
            className="border whitespace-nowrap border-gray-500 p-2 rounded-xl font-semibold text-red-200 bg-red-800 hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
];



const customStyles = {
    headCells: {
      style: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
      }
    },
    cells: {
      style: {
        border: '1px solid #ddd',
        whiteSpace: 'normal', // Allow wrapping for all cells
        overflow: 'visible', // Ensure overflow is handled
      }
    },
    rows: {
      style: {
        borderBottom: '1px solid #ddd',
      }
    }
};


  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    const newRecords = studentData.filter(item => 
      item.student_name.toLowerCase().includes(query) // Filter by student name
    );
    setFilteredData(newRecords); // Update the filtered data state
  };

  return (
    <div className='flex'>
      <Sidebar/>

        <div className="mt-5 overflow-hidden">
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
                    <th className='border border-gray-500 p-2'>Actions</th>
                  </tr>
                </thead> */}
                <div className="mx-10">
                  <input type="text" placeholder='Search By Name...' className='border-black border-[2px] rounded-xl p-1 px-5 m-2' onChange={handleChange}/>
                </div>

                <div className="mx-10 w-full">
                  <DataTable
                    columns={columns}
                    data={filteredData}
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
                            <td className='border border-gray-500 p-2'>{student.id || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_name || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_mail || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_address || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_contact1 || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_contact2 || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.student_gender || 'NULL'}</td>
                            <td className='border border-gray-500 p-2'>{student.Date_of_joining ? new Date(student.Date_of_joining).toLocaleDateString() : 'N/A'}</td>
                            <td className='border border-gray-500 p-2 flex gap-2'>
                                <button className='border border-gray-500 p-2 rounded-xl font-semibold text-purple-200 bg-purple-800 hover:bg-purple-600'>Update</button>
                                <button className='border border-gray-500 p-2 rounded-xl font-semibold text-red-200 bg-red-800 hover:bg-red-600'>Delete</button>
                            </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
          </div>

    </div>
  )
}

export default GymViewStudent