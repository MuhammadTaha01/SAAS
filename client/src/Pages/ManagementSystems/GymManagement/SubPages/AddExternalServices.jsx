import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddExternalServices = () => {

  const { system, version } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    service_name: '',
    service_type: '',
    service_fee: ''
});


  const handleSumbit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:6969/add_externalservices', values)
      .then(res => console.log(res))
      .catch(err => console.error(err));
      
      setValues({
        service_name: '',
        service_type: '',
        service_fee: '',
      });

      navigate(`/products/${system}/${version}/external-services`);
      // window.location.reload();

      console.log(`Service Name: ${values.service_name} | Mail: ${values.service_type} | Address: ${values.service_fee}`);
  };


  return (
    <div className=''>

        <div className="flex flex-col">

          <div className="mt-10">
            <Link to={`/products/${system}/${version}/external-services`}>
              <button className='font-semibold text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200'> Back </button>
            </Link>
          </div>

          <div className="flex items-center flex-wrap bg-gray-100 justify-center mt-5 border-[3px] rounded-xl border-gray-800 mx-10 p-2 gap-8 hover:bg-gray-200">
            <form className='flex gap-8 flex-wrap items-center justify-center' onSubmit={handleSumbit}>
              <div className="flex flex-col">
                <label className='font-semibold'>External Service Name:</label>
                <input
                  required
                  type="text" 
                  name="service_name"
                  value={values.service_name}
                  placeholder='Website/Mobile App/Other Gym Accessories'
                  className='border-gray-500 border-[2px] rounded-xl w-[400px] p-1'
                  onChange={(e) => setValues({...values, service_name:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Service Type: (Optional)</label>
                <input
                  type="text" 
                  name="service_type"
                  value={values.service_type}
                  placeholder='web/app/equipment/paint' 
                  className='border-gray-500 border-[2px] rounded-xl w-[400px] p-1'
                  onChange={(e) => setValues({...values, service_type:e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className='font-semibold'>Service Fee:</label>
                <input
                  required
                  type="text"
                  name="service_fee"
                  value={values.service_fee}
                  placeholder='Fee' 
                  className='border-gray-500 border-[2px] rounded-xl p-1'
                  onChange={(e) => setValues({...values, service_fee:e.target.value})}
                />
              </div>
              <button className='font-semibold w-full text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200'>Add External Service</button>
            </form>

          </div>

        </div>

    </div>
  )
}

export default AddExternalServices;