import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

const WelcomeBar = () => {
    // const { user, isLoading } = useAuth0();

    // if (isLoading)
    // {
    //     return(
    //         <div className='mx-10 mt-10 flex gap-60 items-center justify-center'>
    //             <div className="">
    //                 <div className="bg-gray-500 rounded-xl p-3 px-28"></div>
    //             </div>
    //             <div className="">
    //                 <div className="bg-gray-400 rounded-xl py-5 px-44"></div>
    //             </div>
    //             <div className="flex gap-2">
    //                 <div className="bg-gray-700 rounded-full p-5 px-6"></div>
    //                 <div className="flex flex-col gap-2">
    //                     <div className="bg-gray-500 rounded-xl p-3 px-10"></div>
    //                     <div className="bg-gray-500 rounded-xl p-3 px-10"></div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    const [ user, setUser ] = useState(null);

    useEffect(() => {

        const loggedInUser = Cookies.get('user');
        if(loggedInUser)
        {
            setUser(JSON.parse(loggedInUser));
        }

    },[])

    return (
        <div className='mx-10 mt-10 flex gap-60 items-center justify-center'>
            
            <div className="whitespace-nowrap">
                <h1>Welcome - <span className='font-semibold'>{user?.name}</span>👋</h1>
            </div>

            <div className="">
                <input type="text" name="" placeholder='Search...' className='border-[2px] border-gray-400 p-2 w-96 rounded-xl'/>
            </div>

            <div className="flex items-center gap-2">
                {/* <img src={user.picture} alt={user.name} className='rounded-full h-10'/> */}
                {/* Display user picture or first letter of name */}
                <div className="flex items-center justify-center bg-pink-300 border-[1px] border-black rounded-full h-12 w-12 hover:bg-pink-200" title='Authenticated'>
                    <span className='text-pink-800 font-bold text-lg hover:text-pink-700'>{user?.name?.charAt(0)}</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className='font-semibold'>{user?.name}</h1>
                    <span>Admin</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBar;
