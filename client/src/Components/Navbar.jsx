import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import PkFlag from '../Images/Flag_of_Pakistan.png'
import USAFlag from '../Images/Flag_of_the_United_States.png'


const Navbar = () =>
{
    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated, user, logout } = useAuth0();
    const [country, setCountry] = useState('Pakistan');

    useEffect(() => {
        const language = navigator.language || navigator.languages[0];
        console.log('Detected language:', language);
      
        if (language.includes('en-US') || language.includes('en')) 
        {
          setCountry('United States');
        } 
        else if (language.includes('ur') || language.includes('en-PK') || language.includes('pk')) 
        {
          setCountry('Pakistan');
        } 
        else 
        {
          setCountry('United States');
        }
      }, [country]);
      


    return(
        <div className="flex p-1 mt-4 items-center justify-center bg-white rounded-3xl border-[1px] border-gray-400 mx-40 gap-[160px]">
            <div className="bg-white">
                <Link to={'/'} className="bg-white">
                    <h1 className="bg-white font-semibold flex whitespace-nowrap gap-2">DevCrescentia
                        { country === 'Pakistan' && <img src={PkFlag} loading="lazy" alt="pk" className="w-8 cursor-default" /> }
                        { country === 'United States' && <img src={USAFlag} loading="lazy" alt="usa" className="w-8 cursor-default" /> }
                    </h1>
                </Link>
            </div>
            <div className="bg-white">
                <Link to={'/'} className="bg-white">
                    <button className="bg-white font-medium mx-3 p-2 rounded-xl hover:bg-slate-600 hover:text-white hover:duration-300">Home</button>
                </Link>
                <Link to={'/services'}>
                    <button className="bg-white font-medium mx-3 p-2 rounded-xl hover:bg-slate-600 hover:text-white hover:duration-300">Services</button>
                </Link>
                <Link to={'/products'} className="bg-white">
                    <button className="bg-white font-medium mx-3 p-2 rounded-xl hover:bg-slate-600 hover:text-white hover:duration-300">Products</button>
                </Link>
                <Link to={'/about-us'}>
                    <button className="bg-white font-medium mx-3 p-2 rounded-xl hover:bg-slate-600 hover:text-white hover:duration-300">About Us</button>
                </Link>
                <Link to={'/contact-us'}>
                    <button className="bg-white font-medium mx-3 p-2 rounded-xl hover:bg-slate-600 hover:text-white hover:duration-300">Contact Us</button>
                </Link>
            </div>
            <div className="">
                {
                    isAuthenticated
                    ?
                    <div className="flex gap-2">
                        <img src={user.picture} alt={user.name} className="rounded-full h-11 flex items-center justify-center"/>
                        <button className="p-2 text-white bg-black rounded-3xl px-5"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    </div>
                    :
                    <div className="flex gap-2">
                        <div className="bg-gray-600 text-white rounded-full p-2 flex justify-center items-center" title="| Not Authenticated | Kindly do Log In">N/A</div>
                        <button className="p-2 text-white bg-black rounded-3xl px-5"  onClick={() => loginWithRedirect()}>Log In</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;