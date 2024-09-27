import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const { system, version } = useParams();

  const [values, setValues] = useState({
    student_name: '',
    student_mail: '',
    student_address: '',
    student_contact1: '',
    student_contact2: '',
    student_gender: ''
});


  const handleSumbit = (e) => {
    e.preventDefault();

    // If student_contact2 is an empty string, set it to null
    const updatedValues = {
      ...values,
      student_mail: values.student_mail === "" ? null : values.student_mail,
      student_contact2: values.student_contact2 === "" ? null : values.student_contact2
    };

    axios.post('http://localhost:6969/add-student', updatedValues)
      .then(res => console.log(res))
      .catch(err => console.error(err));
      
      setValues({
        student_name: '',
        student_mail: '',
        student_address: '',
        student_contact1: '',
        student_contact2: '',
        student_gender: '',
        // Reset other fields if applicable
      });

      console.log(`Name: ${updatedValues.student_name} | Mail: ${updatedValues.student_mail} | Address: ${updatedValues.student_address} | Contact1: ${updatedValues.student_contact1}
                | Contact2: ${updatedValues.student_contact2} | Gender: ${updatedValues.student_gender}`);
  };


  return (
    <div className=''>

        <div className="flex flex-col">

          <div className="mt-10">
            <Link to={`/products/${system}/${version}/add-students`}>
              <button className='font-semibold text-[15px] mx-10 bg-blue-400 text-blue-800 border-[1px] border-blue-800 rounded-xl px-5 p-1 hover:text-blue-700 hover:bg-blue-300 hover:transition-all duration-200'> Back </button>
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
                  value={values.student_name}
                  placeholder='Taha,Ali...' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_name:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student G-mail: (Optional)</label>
                <input
                  type="text" 
                  name="mail"
                  value={values.student_mail}
                  placeholder='xyz@gmail.com' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_mail:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Address:</label>
                <input
                  required
                  type="text"
                  name="student_address"
                  value={values.student_address}
                  placeholder='Street | City' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_address:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Contact # 01:</label>
                <input
                  required
                  type="text" 
                  name="student_contact1"
                  value={values.student_contact1}
                  placeholder='+XX XXXXXXXXXXX' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_contact1:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Contact # 02: (Optional)</label>
                <input 
                  type="text" 
                  name="student_contact2"
                  value={values.student_contact2}
                  placeholder='+XX XXXXXXXXXXX' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_contact2:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Student Gender:</label>
                <select
                  required
                  name="student_gender"
                  value={values.student_gender}
                  className='border-[2px] border-gray-950'
                  onChange={(e) => setValues({...values, student_gender:e.target.value})}
                >
                  <option value="" disabled selected>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <button className='font-semibold w-full text-[15px] mx-10 bg-blue-400 text-blue-800 border-[1px] border-blue-800 rounded-xl px-5 p-1 hover:text-blue-700 hover:bg-blue-300 hover:transition-all duration-200'>Sumbit</button>
            </form>

          </div>

        </div>

    </div>
  )
}

export default Add