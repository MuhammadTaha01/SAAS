import React, { useEffect, useState } from 'react';
import Sidebar from './GymComponents/Sidebar';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const GymFeeStatus = () => {
    const [fee, setFee] = useState([]);
    const [selectedFee, setSelectedFee] = useState({
        id: null,
        fee_status: ''
    });

    useEffect(() => {
        axios.get('http://localhost:6969/view-student')
            .then(res => setFee(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFee.id || !selectedFee.fee_status) {
            console.log('ID and status are required');
            return;
        }

        try {
            const res = await axios.put(`http://localhost:6969/update_fee_status_students/${selectedFee.id}`, {
                fee_status: selectedFee.fee_status
            });
            console.log(res.data);

            // Update the local state to reflect the change
            setFee(prevFee =>
                prevFee.map(item =>
                    item.id === selectedFee.id ? { ...item, fee_status: selectedFee.fee_status } : item
                )
            );

            // Reset the selected fee state
            setSelectedFee({ id: null, fee_status: '' });
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatusChange = (id, fee_status) => {
        setSelectedFee({ id, fee_status });
    };

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true, width: '70px' },
        { name: 'Student Name', selector: row => row.student_name || 'NULL', width: '120px' },
        { name: 'Fee Status', selector: row => row.fee_status || 'Un-Paid', width: '100px' },
        { name: 'Fee To be paid', selector: row => row.fee || 'Not Entered Yet', width: '150px' },
        {
            name: 'Action',
            cell: row => (
                <select 
                    value={selectedFee.id === row.id ? selectedFee.fee_status : ""}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                >
                    <option value="" disabled>Select</option>
                    <option value="paid">Paid</option>
                    <option value="un-paid">Un-Paid</option>
                </select>
            ),
            width: '150px'
        },
        {
            name: 'Check Fee History',
            cell: row => (
                <button
                    className='font-semibold text-[15px] bg-pink-400 text-pink-800 border-[1px] border-pink-800 rounded-xl px-5 p-1 hover:text-pink-700 hover:bg-pink-300 hover:transition-all duration-200'
                    onClick={() => console.log(row.id)}
                >Check</button>
            ),
            width: '150px'
        }
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: 'black',
                color: 'white',
                fontSize: '15px'
            }
        },
        cells: {
            style: {
                border: '1px solid #ddd',
            }
        },
        rows: {
            style: {
                borderBottom: '1px solid #ddd',
            }
        }
    };

    return (
        <div className='flex'>
            <Sidebar />

            <div className="mt-10 mx-10">
                <form onSubmit={handleSubmit}>
                    <DataTable
                        columns={columns}
                        data={fee}
                        responsive
                        pagination
                        customStyles={customStyles}
                        highlightOnHover
                        selectableRows={false}
                    />
                    <button className='mt-5 border whitespace-nowrap w-full border-gray-500 p-2 rounded-xl font-semibold text-green-200 bg-green-800 hover:bg-green-600'>SAVE</button>
                </form>
            </div>
        </div>
    );
};

export default GymFeeStatus;
