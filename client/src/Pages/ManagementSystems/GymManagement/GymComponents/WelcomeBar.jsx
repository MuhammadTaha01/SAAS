import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const WelcomeBar = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) return <div className='mx-10 mt-10'>Loading...</div>;

    return (
        <div className='mx-10 mt-10 flex gap-60'>
            
            <div className="whitespace-nowrap">
                <h1>Welcome - <span className='font-semibold'>{user.name}</span>👋</h1>
            </div>

            <div className="">
                <input type="text" name="" placeholder='Search...' className='border-[2px] border-gray-400 p-2 w-96 rounded-xl'/>
            </div>

            <div className="flex gap-1">
                <img src={user.picture} alt={user.name} className='rounded-full h-10'/>
                <div className="flex flex-col items-center">
                    <h1 className='font-semibold'>{user.name}</h1>
                    <span>Admin</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBar;
