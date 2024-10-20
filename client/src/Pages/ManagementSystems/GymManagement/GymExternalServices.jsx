import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'


const GymExternalService = () => {

  const { system, version } = useParams();
  const [ externalServicesData, setExternalServicesData ] = useState([])
  const [filteredData, setFilteredData] = useState([]); // <-- Missing state declaration
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('http://localhost:6969/gym_externalservices') 
        .then(res => {
          setExternalServicesData(res.data);
        })
        .catch(err => console.log(err))
  },[])



  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      axios.delete(`http://localhost:6969/delete-service/${id}`)
        .then((res) => {
          console.log(res.data);
          // Update the state after successful deletion
          setExternalServicesData((prevData) => prevData.filter(service => service.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = (id) => {
    console.log(id);
    // Redirect to the update page
    navigate(`/products/${system}/${version}/update-services/${id}`);
  };
  

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '70px' },
    { 
      name: 'Service Name: ', 
      selector: row => row.service_name || 'NULL', 
      width: '150px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.service_name || 'NULL'}</div>
    },
    { 
      name: 'Service Type: ', 
      selector: row => row.service_type || 'NULL', 
      width: '200px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.service_type || 'NULL'}</div>
    },
    { 
      name: 'Service Fee: ', 
      selector: row => row.service_fee || 'NULL', 
      width: '200px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.service_fee || 'NULL'}</div>
    },
    { 
      name: 'Service Taking Date: ', 
      selector: row => row.service_startedtime || 'NULL', 
      width: '200px',
      cell: row => <div style={{ whiteSpace: 'normal' }}>{row.service_startedtime ? new Date(row.service_startedtime).toLocaleDateString() : 'NULL'}</div>
    },
    {
      name: 'Actions',
      width: '150px',
      cell: row => (
        <div className="flex gap-2" style={{ whiteSpace: 'normal' }}>
            <button
              className="border whitespace-nowrap border-gray-500 p-2 rounded-xl font-semibold text-purple-200 bg-purple-800 hover:bg-purple-600"
              onClick={() => handleUpdate(row.id)}
              >
              Update
            </button>
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
        <Link to={`/products/${system}/${version}/add-external-services`}>
          <button className='font-semibold text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200'>Add External Services</button>
        </Link>

        <div className="flex items-center justify-center mt-5 mx-10">
               {/* <table className='border-collapse border border-gray-500'>
                <thead>
                  <tr>
                    <th className='border border-gray-500 p-2'>ID</th>
                    <th className='border border-gray-500 p-2'>External Service Name: </th>
                    <th className='border border-gray-500 p-2'>Service Type: </th>
                    <th className='border border-gray-500 p-2'>Service Fee: </th>
                    <th className='border border-gray-500 p-2'>Date Of taking this service: </th>
                  </tr>
                </thead> */}

                <div className="">
                  <marquee behavior="" direction="" scrollamount='10'
                    style={{
                      marginRight: '20px',
                      backgroundColor: '#f0f0f0', // Light gray background
                      color: '#ff0000',           // Red text color
                      fontSize: '16px',           // Semi-bold font size
                      fontWeight: '600',          // For semi-bold text
                      padding: '10px'             // Optional: add some padding for better spacing
                    }}
                  >Note: Any Services added in external services section will be considered as liability. And will be treated as a *Loss*</marquee>
                  <DataTable
                    columns={columns}
                    data={externalServicesData}
                    responsive
                    pagination
                    customStyles={customStyles}
                    highlightOnHover
                    selectableRows={false}
                  />
                </div>

                {/* <tbody>
                  {externalServicesData.map((externalServices,index) => {
                    return(
                        <tr key={index}>
                        <td className='border border-gray-500 p-2'>{externalServices.id}</td>
                        <td className='border border-gray-500 p-2'>{externalServices.service_name || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{externalServices.service_type || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{externalServices.service_fee || 'NULL'}</td>
                        <td className='border border-gray-500 p-2'>{externalServices.service_startedtime || 'NULL'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>  */}
          </div>

      </div>
    

    </div>
  )
}

export default GymExternalService;