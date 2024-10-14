import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cards from '../CommonComponents/Cards';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';  // Import js-cookie

const Products = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('Pakistan');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  const handleNavigate = (route) => {
    navigate(`/products/${route}`);
  };

  useEffect(() => {
    const language = navigator.language || navigator.languages[0];
    console.log('Detected language:', language);
    
    if (language.includes('en-US') || language.includes('en')) {
      setCountry('United States');
    } else if (language.includes('ur') || language.includes('en-PK') || language.includes('pk')) {
      setCountry('Pakistan');
    } else {
      setCountry('United States');
    }
    
    // Check if the user is logged in via cookies
    const loggedInStatus = Cookies.get('isAuthenticated') === 'true';
    setIsAuthenticated(loggedInStatus);
  }, []);

  const clickhere = (e) => {
    window.location.reload();
  }

  return (
    <div className=''>
      <Navbar />

      <div className="flex items-center justify-center">
        {isAuthenticated ? (
          <>
            <Cards
              heading={'Gym Crescentia'}
              paragraph={`Our Gym Management System offers an all-in-one solution to streamline gym operations, from member enrollment 
                          to payment tracking. Easily monitor attendance, manage personal training schedules, and keep up-to-date with client
                          progress—all in one place. Simplify billing, reduce paperwork, and boost member satisfaction by providing a seamless 
                          experience.`}
              price={country === 'Pakistan' ? '100Rs' : '500$'}
              onCardClick={() => handleNavigate('gym')}
            />
            <Cards
              heading={'Academy Crescentia'}
              paragraph={`The Academy Management System is designed to facilitate efficient administration of educational institutes. It manages
                          student enrollment, attendance, grading, and fee payments with ease. Teachers can track student progress, assign coursework,
                          and communicate effectively with parents. This all-in-one solution ensures a structured and organized learning environment.`}
              price={country === 'Pakistan' ? '100Rs' : '500$'}
              onCardClick={() => handleNavigate('academy')}
            />
          </>
        ) : 
        <>
        <div className="flex flex-col items-center my-36">
          <h1 className='font-semibold text-[30px] mt-10'>Make sure to login first</h1>
          <button className="bg-slate-600 rounded-3xl p2 px-10 text-[20px] text-white" onClick={clickhere}>If You are logged in - clickhere</button>
        </div>
        </>
      }
      </div>

      <Footer />
    </div>
  );
}

export default Products;
