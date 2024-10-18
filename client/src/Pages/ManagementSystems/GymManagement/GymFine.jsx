import React, { useEffect, useState } from 'react'
import Sidebar from './GymComponents/Sidebar'
import axios from 'axios'
import DataTable from 'react-data-table-component'

const GymFine = () => {

  const [ feeData, setFee ] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // <-- Missing state declaration
  const [fineAmounts, setFineAmounts] = useState({}); // <-- To store fine amounts


  useEffect(() => {
    axios.get('http://localhost:6969/view-student') 
      .then(res => {
        setFee(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.log(err))
    },[])

  const handleFineChange = (id, value) => {
    setFineAmounts(prev => ({
      ...prev,
      [id]: value  // Store fine for the specific student
    }));
  };

  // Define columns for the DataTable
  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '80px' },
    { name: 'Student Name', selector: row => row.student_name || 'N/A', sortable: true, width: '200px' },
    { name: 'Fee', selector: row => row.fee || 'Not Updated', sortable: true, width: '200px' },
    { name: 'Fee Status', selector: row => row.fee_status || 'Not Updated', sortable: true, width: '150px' },
    { name: 'Fine', selector: row => row.fine || 'Not Fined Yet', sortable: true, width: '150px' },
    {
      name: 'Fine Amount',
      cell: row => (
        <input
          type="text"
          value={fineAmounts[row.id] || ''} // Value from the state
          onChange={(e) => handleFineChange(row.id, e.target.value)} // Update state on input
          className="border-[2px] border-black p-1 rounded w-full"
          placeholder="Enter fine"
        />
      ),
      width: '150px'
    },
    // { name: 'Status', selector: row => row.status || 'N/A', width: '120px' },
    {
      name: 'Action',
      cell: row => (
        <button
          className="bg-red-500 font-semibold text-white px-5 py-1 rounded-2xl"
          onClick={() => alert(`Fining student ${row.student_name}`)}
        >
          Fine
        </button>
      ),
      width: '100px'
    },
  ];

  const handleChange = (e) => 
  {
      const query = e.target.value.toLowerCase();
      const newRecords = feeData.filter(item =>  // <-- `fee` should be `feeData`
        item.student_name.toLowerCase().includes(query) // Filter by student name
      );
      setFilteredData(newRecords); // Update the filtered data state
  };    
    

  return (
    <div className='flex'>
        <Sidebar/>
        
        <div className="flex flex-col">
          <div className="flex justify-between mx-10 mt-2">
            <input type="text" placeholder='Search By Name...' className='border-black border-[2px] rounded-xl p-1 px-5 m-2' onChange={handleChange}/>
          </div>
          <div className="w-full mx-10">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
              responsive
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: '#20232a',
                    color: 'white',
                    fontSize: '14px',
                  },
                },
                rows: {
                  style: {
                    minHeight: '50px',
                  },
                },
              }}
            />
        </div>
      </div>

    </div>
  )
}

export default GymFine