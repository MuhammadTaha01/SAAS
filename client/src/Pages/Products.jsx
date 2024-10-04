import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../CommonComponents/Cards'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'



const Products = () => {
  
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  
  const handleNavigate = (route) =>
  {
    navigate(`/products/${route}`);
  }

  return (
    <div className=''>
        <Navbar/>

        { isAuthenticated 
            ?  
              <div className="flex items-center justify-center">
                <Cards
                  heading={'Gym Crescentia'}
                  onCardClick={() => handleNavigate('gym')}
                />
                <Cards
                  heading={'Academy Crescentia'}
                  onCardClick={() => handleNavigate('academy')}
                />
              </div>
            : 
            <>
              <h1 className='font-semibold text-[30px] flex justify-center items-center my-28'>Make sure to login first</h1>
            </>
        }

        <Footer/>
    </div>
  )
}

export default Products