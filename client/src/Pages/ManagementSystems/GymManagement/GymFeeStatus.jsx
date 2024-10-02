import React, { useEffect, useState } from 'react';
import Sidebar from './GymComponents/Sidebar';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { jsPDF } from 'jspdf'
import ExcelJs from 'exceljs'
import { saveAs } from 'file-saver';



const GymFeeStatus = () => {
    const [fee, setFee] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // <-- Missing state declaration
    const [selectedFee, setSelectedFee] = useState({
        id: null,
        fee_status: ''
    });

    useEffect(() => {
        axios.get('http://localhost:6969/view-student') 
          .then(res => {
            setFee(res.data);
            setFilteredData(res.data);
          })
          .catch(err => console.log(err))
    },[])

    // useEffect(() => {
    //     axios.get('http://localhost:6969/view-student')
    //         .then(res => setFee(res.data))
    //         .catch(err => console.log(err));
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFee.id || !selectedFee.fee_status) {
            console.log('ID and status are required');
            return;
        }

        try 
        {
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
            window.location.reload();
        }

        catch (error) 
        {
            console.error(error);
        }
    };

    const handleStatusChange = (id, fee_status) => {
        setSelectedFee({ id, fee_status });
    };

    const handleChange = (e) => 
    {
        const query = e.target.value.toLowerCase();
        const newRecords = fee.filter(item => 
          item.student_name.toLowerCase().includes(query) // Filter by student name
        );
        setFilteredData(newRecords); // Update the filtered data state
    };


      const exportToExcelAndWhatsApp = async () => {
        // Step 1: Convert filtered data to an Excel sheet
        const workbook = new ExcelJs.Workbook();
        const worksheet = workbook.addWorksheet('Students');
    
        if (window.confirm('Are you sure you want to install excel and send it on whatsapp?')) {
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'Student Name', key: 'student_name', width: 20 },
                { header: 'Fee Status', key: 'fee_status', width: 30 },
                { header: 'Fee to be paid', key: 'fee', width: 30 },
                { header: 'Date Of Joining', key: 'date_of_joining', width: 30 },
            ];
    
            worksheet.getRow(1).eachCell(cell => {
                cell.font = { bold: true };
                cell.alignment = { vertical: 'middle', horizontal: 'center' };
            });
    
            // Adding data to worksheet
            filteredData.forEach(student => {
                const formattedStudent = {
                    ...student,
                    date_of_joining: student.Date_of_joining
                        ? new Date(student.Date_of_joining).toLocaleDateString() // Format the date here
                        : 'N/A', // Handle cases where the date is not available
                };
                worksheet.addRow(formattedStudent);
            });
    
            // Step 2: Create Blob and save it
            const buffer = await workbook.xlsx.writeBuffer();
            const file = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            const fileName = `Students_Data.xlsx`;
            saveAs(file, fileName);
    
            // Step 3: Open WhatsApp link
            const whatsappNumber = '+92 018171334'; // Set the recipient phone number (include country code)
            const whatsappMessage = `I have exported the student data. Please find the attached Excel file: ${fileName}`;
            const whatsappUrl = `https://web.whatsapp.com/`;
            window.open(whatsappUrl, '_blank');
        }
    };
    

    const handleGenerateFeeSlipClick = (e, row) => {
        e.preventDefault();
        
        if (!row.fee_status) 
        {
            console.log('Fee status is not set');
            alert(`Can't generate Fee status - bcz it is not set`);
            return;
        }
    
        if (row.fee_status.toLowerCase() === 'un-paid') 
        {
            console.log('Cannot generate fee slip');
            alert('Cannot generate fee slip - status Un-Paid');
        } 
        
        else 
        {
            console.log(`Generating fee slip of ${row.id}`);
            alert('Generating fee slip');

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [100, 150], // Width and height in millimeters
            });
        
            // Add content to the PDF with bold headings
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('Gym Fee Slip', 20, 20);
        
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Gym Name:', 20, 40);
            doc.setFont('helvetica', 'normal');
            doc.text('XYZ Gym', 60, 40);
        
            doc.setFont('helvetica', 'bold');
            doc.text('Student Name:', 20, 50);
            doc.setFont('helvetica', 'normal');
            doc.text(`${row.student_name || 'N/A'}`, 60, 50);
        
            doc.setFont('helvetica', 'bold');
            doc.text('Student ID:', 20, 60);
            doc.setFont('helvetica', 'normal');
            doc.text(`${row.id}`, 60, 60);
        
            doc.setFont('helvetica', 'bold');
            doc.text('Fee Paid:', 20, 70);
            doc.setFont('helvetica', 'normal');
            doc.text(`${row.fee || 'Not Entered Yet'}`, 60, 70);
        
            doc.setFont('helvetica', 'bold');
            doc.text('Fee Status:', 20, 80);
            doc.setFont('helvetica', 'normal');
            doc.text(`${row.fee_status}`, 60, 80);
        
            // Save the generated PDF
            doc.save(`FeeSlip_${row.student_name || 'Unknown'}.pdf`);
        }
    };
    


    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true, width: '70px' },
        { name: 'Student Name', selector: row => row.student_name || 'NULL', width: '120px' },
        { name: 'Fee Status', selector: row => row.fee_status ? row.fee_status.toLowerCase() : 'Status not updated', width: '200px' },
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
          { name: 'Date Of Joining', selector: row => row.Date_of_joining ? new Date(row.Date_of_joining).toLocaleDateString() : 'NULL', width: '150px' },
          {
              name: 'Check Fee History',
              cell: row => (
                  <button
                      className='font-semibold text-[15px] bg-pink-400 text-pink-800 border-[1px] border-pink-800 rounded-xl px-5 p-1 hover:text-pink-400 hover:bg-pink-800 hover:transition-all duration-200'
                      onClick={() => console.log(row.id)}
                  >Check</button>
              ),
              width: '170px'
          },
          {
              name: 'Generate Fee Slip',
              cell: row => (
                    <button
                        className='font-semibold text-[15px] bg-pink-800 text-pink-400 border-[1px] border-pink-800 rounded-xl px-5 p-1 hover:text-pink-700 hover:bg-pink-400 hover:transition-all duration-200'
                        onClick={(e) => handleGenerateFeeSlipClick(e, row)}>
                        Generate
                    </button>
              ),
              width: '180px'
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

            <div className="">

                <div className="flex justify-between mx-10 mt-2">
                    <input type="text" placeholder='Search By Name...' className='border-black border-[2px] rounded-xl p-1 px-5 m-2' onChange={handleChange}/>
                    <button className='font-semibold text-[15px] bg-green-700 text-white rounded-xl m-1 px-3 hover:bg-green-500' onClick={exportToExcelAndWhatsApp}>Export & Send via Whatsapp</button>
                </div>

                <div className="mx-10">
                    <form onSubmit={handleSubmit}>
                        <DataTable
                            columns={columns}
                            data={filteredData}
                            responsive
                            pagination
                            customStyles={customStyles}
                            highlightOnHover
                            selectableRows={false}
                            />
                        <button className='mt-1 border whitespace-nowrap w-full border-gray-500 p-2 rounded-xl font-semibold text-green-200 bg-green-800 hover:bg-green-600'>SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GymFeeStatus;