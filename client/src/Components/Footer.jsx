import React, { useState } from 'react'
import axios from 'axios'


const Footer = () => {

    const [values, setValues] = useState({
        gmail: ''
    })

    const handleSumbit = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:6969/subscribed_email', values)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

  return (
    <div className='flex flex-col mt-5 bg-black p-20'>
        
        <div className="flex items-center my-10 gap-80">
            <div className="">
                <h1 className='text-white font-semibold text-[20px]'>Let's Connected 🔥</h1>
                <h2 className='text-gray-300'>Sign up to receive Delta tuotorials and news. You can unsubscribe at any time.</h2>
            </div>
            <div className="flex gap-3">
                <form onSubmit={handleSumbit}>
                    <input 
                        type="text" 
                        name="gmail" 
                        placeholder='Your Email Address' 
                        className='p-2 rounded-2xl bg-gray-700 placeholder-white text-white w-[300px]'
                        onChange={(e) => setValues({...values, gmail:e.target.value})}                    
                    />
                    <button className='text-black bg-white rounded-2xl p-2 px-2'>Sumbit</button>
                </form>
            </div>
        </div>
            <hr />
        <div className="flex items-center justify-center gap-32 my-10">
            <div className="flex flex-col items-center gap-1">
                <h1 className='text-white font-semibold'>Use Cases</h1>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>UI Design</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Prototype</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Cases Study</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Wwireframes</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Templates</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Remote Design</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h1 className='text-white font-semibold'>Resource</h1>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Community</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Company</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Blog</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Learn</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Library</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Developers</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Docs</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Security</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Status</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h1 className='text-white font-semibold'>Legal</h1>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Privacy Policy</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Partners</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Privacy</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Carrers</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Downloads</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Updates</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Newsletters</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h1 className='text-white font-semibold'>Support</h1>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Courses</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>References</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Histort</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Mentoring</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Collaboration</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h1 className='text-white font-semibold'>Social Media</h1>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Facebook</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Twitter (X)</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Linkedin</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Instagram</h2>
                <h2 className='text-gray-300 cursor-pointer hover:underline'>Youtube</h2>
            </div>
        </div>

    </div>
  )
}

export default Footer