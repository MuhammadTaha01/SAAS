import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PkFlag from '../Images/Flag_of_Pakistan.png';
import USAFlag from '../Images/Flag_of_the_United_States.png';
import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';  // Import js-cookie

const Navbar = () => {
    const [country, setCountry] = useState('Pakistan');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Handle successful login and store info in cookies
    const handleSuccess = (tokenResponse) => {
        fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`)
            .then(response => response.json())
            .then(decodedCredential => {
                setIsAuthenticated(true);
                setUser(decodedCredential);

                // Save user info in cookies
                Cookies.set('user', JSON.stringify(decodedCredential), { expires: 7 }); // expires in 7 days
                Cookies.set('isAuthenticated', true, { expires: 7 });
            })
            .catch(error => {
                console.log("Error fetching user info: ", error);
            });
    };

    const handleLogout = () => {
        googleLogout();
        setIsAuthenticated(false);
        setUser(null);

        // Remove cookies
        Cookies.remove('user');
        Cookies.remove('isAuthenticated');
    };

    // Check if the user is already logged in via cookies
    useEffect(() => {
        const loggedInUser = Cookies.get('user');
        const loggedInStatus = Cookies.get('isAuthenticated') === 'true';

        if (loggedInUser && loggedInStatus) {
            setUser(JSON.parse(loggedInUser));
            setIsAuthenticated(true);
        }

        const language = navigator.language || navigator.languages[0];
        console.log('Detected language:', language);

        if (language.includes('en-US') || language.includes('en')) {
            setCountry('United States');
        } else if (language.includes('ur') || language.includes('en-PK') || language.includes('pk')) {
            setCountry('Pakistan');
        } else {
            setCountry('United States');
        }
    }, []);

    // Using Google Login hook
    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: (error) => console.log('Login Failed:', error),
    });

    return (
        <div className="flex p-1 mt-4 items-center justify-center bg-white rounded-3xl border-[1px] border-gray-400 mx-40 gap-[160px]">
            <div className="bg-white">
                <Link to={'/'} className="bg-white">
                    <h1 className="bg-white font-semibold flex whitespace-nowrap gap-2">DevCrescentia
                        {country === 'Pakistan' && <img src={PkFlag} loading="lazy" alt="pk" className="w-8 cursor-default" />}
                        {country === 'United States' && <img src={USAFlag} loading="lazy" alt="usa" className="w-8 cursor-default" />}
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

            <div>
                <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID_HERE">
                    {
                        isAuthenticated ? (
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center justify-center bg-gray-300 border-[1px] border-black rounded-full h-11 w-11" title="You are logged in!!!">
                                    <span className="text-black font-bold text-[20px]">{user?.name.charAt(0)}</span>
                                </div>
                                <button onClick={handleLogout} className="p-2 text-white bg-black rounded-3xl px-5">
                                    Log Out
                                </button>
                            </div>
                        ) : 
                        <>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center justify-center bg-gray-300 border-[1px] border-black rounded-full h-11 w-11" title="Not Authenticated/Login">
                                <span className="text-black font-bold text-[15px]">N/A</span>
                            </div>
                            <button onClick={() => login()} className="p-2 text-white bg-black rounded-3xl px-5">
                                Login
                            </button>
                        </div>
                        </>
                    }
                </GoogleOAuthProvider>
            </div>
        </div>
    );
};

export default Navbar;