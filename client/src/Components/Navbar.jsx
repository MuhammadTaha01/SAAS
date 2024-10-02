import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () =>
{

    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated, user, logout } = useAuth0();
    return(
        <div className="flex p-1 mt-4 items-center justify-center bg-white rounded-3xl border-[1px] border-gray-400 mx-40 gap-[150px]">
            <div className="bg-white">
                <Link to={'/'} className="bg-white">
                    <h1 className="bg-white font-semibold">DevCrescentia</h1>
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
                    <button className="p-2 text-white bg-black rounded-3xl px-5"  onClick={() => loginWithRedirect()}>Log In</button>
                }
            </div>
        </div>
    );
}

export default Navbar;