import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateExternalServices = () => {
  const { system, version, id } = useParams(); // Ensure 'id' is included in params
  const navigate = useNavigate();

  const [values, setValues] = useState({
    service_name: '',
    service_type: '',
    service_fee: '',
  });

  
  useEffect(() => {
    axios.get(`http://localhost:6969/update_externalservices/${id}`)
      .then((res) => {
        console.log(res.data); // Check the response data
        setValues({
          service_name: res.data.service_name,
          service_type: res.data.service_type,
          service_fee: res.data.service_fee,
        });
      })
      .catch((err) => console.error(err));
  }, [id]);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Check if values have the correct data
  
    axios.put(`http://localhost:6969/update_externalservices/${id}`, values)
      .then(res => {
        console.log('Service updated successfully:', res);
        navigate(`/products/${system}/${version}/external-services`);
      })
      .catch(err => console.error('Error updating service:', err));
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
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
          <form className='flex gap-8 flex-wrap items-center justify-center' onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className='font-semibold'>External Service Name:</label>
              <input
                required
                type="text" 
                name="service_name"
                value={values.service_name}
                placeholder='Website/Mobile App/Other Gym Accessories'
                className='border-gray-500 border-[2px] rounded-xl w-[400px] p-1'
                onChange={handleChange} // Corrected here
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
                onChange={handleChange} // Corrected here
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
                onChange={handleChange} // Corrected here
              />
            </div>
            <button className='font-semibold w-full text-[15px] mx-10 bg-gray-400 text-gray-800 border-[1px] border-gray-800 rounded-xl px-5 p-1 hover:text-gray-700 hover:bg-gray-300 hover:transition-all duration-200' type="submit">Update External Service</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateExternalServices;
