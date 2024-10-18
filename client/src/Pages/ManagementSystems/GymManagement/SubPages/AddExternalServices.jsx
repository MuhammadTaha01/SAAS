import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const { system, version } = useParams();
  const navigate = useNavigate();

//   const [values, setValues] = useState({
//     student_name: '',
//     student_mail: '',
//     student_address: '',
//     student_contact1: '',
//     student_contact2: '',
//     fee: '',
//     student_gender: ''
// });


//   const handleSumbit = (e) => {
//     e.preventDefault();

//     // If student_contact2 is an empty string, set it to null
//     const updatedValues = {
//       ...values,
//       student_mail: values.student_mail === "" ? null : values.student_mail,
//       student_contact2: values.student_contact2 === "" ? null : values.student_contact2
//     };

//     axios.post('http://localhost:6969/add_students', updatedValues)
//       .then(res => console.log(res))
//       .catch(err => console.error(err));

//       // Step 2: Send Welcome Email
//       if (updatedValues.student_mail) {
//         axios.post('http://localhost:6969/send_welcome_email', {
//           student_email: updatedValues.student_mail,
//           student_name: updatedValues.student_name,
//         })
//         .then((res) => console.log('Email sent successfully'))
//         .catch((err) => console.error('Failed to send email', err));
//       }
      
//       setValues({
//         student_name: '',
//         student_mail: '',
//         student_address: '',
//         student_contact1: '',
//         student_contact2: '',
//         fee: '',
//         student_gender: '',
//         // Reset other fields if applicable
//       });

//       navigate(`/products/${system}/${version}/add-students`);
//       window.location.reload();

//       console.log(`Name: ${updatedValues.student_name} | Mail: ${updatedValues.student_mail} | Address: ${updatedValues.student_address} | Contact1: ${updatedValues.student_contact1}
//                 | Contact2: ${updatedValues.student_contact2} | Fee: ${updatedValues.fee} | Gender: ${updatedValues.student_gender}`);
//   };


  return (
    <div className=''>

        <div className="flex flex-col">

          <div className="mt-10">
            <Link to={`/products/${system}/${version}/external-services`}>
              <button className='font-semibold text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200'> Back </button>
            </Link>
          </div>

          <div className="flex items-center flex-wrap bg-gray-100 justify-center mt-5 border-[3px] rounded-xl border-gray-800 mx-10 p-2 gap-8 hover:bg-gray-200">
            <form className='flex gap-8 flex-wrap items-center justify-center'>
              <div className="flex flex-col">
                <label className='font-semibold'>External Service Name:</label>
                <input
                  required
                  type="text" 
                  name="external_servicename"
                //   value={values.student_name}
                  placeholder='Website/Mobile App/Other Gym Accessories'
                  className='border-gray-500 border-[2px] rounded-xl w-[400px] p-1'
                  onChange={(e) => setValues({...values, student_name:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Service Type: (Optional)</label>
                <input
                  type="text" 
                  name="external_servicetype"
                //   value={values.student_mail}
                  placeholder='web/app/equipment/paint' 
                  className='border-gray-500 border-[2px] rounded-xl w-[400px] p-1'
                  onChange={(e) => setValues({...values, student_mail:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Service Fee:</label>
                <input
                  required
                  type="text"
                  name="external_servicefee"
                //   value={values.student_address}
                  placeholder='Fee' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, student_address:e.target.value})}
                />
              </div>
              <button className='font-semibold w-full text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200'>Add External Service</button>
            </form>

          </div>

        </div>

    </div>
  )
}

export default Add