import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../CommonComponents/Cards'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  
  const navigate = useNavigate();
  
  const handleNavigate = (route) =>
  {
    navigate(`/products/${route}`);
  }

  return (
    <div className=''>
        <Navbar/>

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

        <Footer/>
    </div>
  )
}

export default Products