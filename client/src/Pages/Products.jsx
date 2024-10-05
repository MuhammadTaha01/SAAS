import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../CommonComponents/Cards'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'



const Products = () => {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleNavigate = (route) => {
    navigate(`/products/${route}`);
  }

  return (
    <div className=''>
      <Navbar />

      {isAuthenticated
        ?
        <div className="flex items-center justify-center">
          <Cards
            heading={'Gym Crescentia'}
            paragraph={`Our Gym Management System offers an all-in-one solution to streamline gym operations, from member enrollment 
                        to payment tracking. Easily monitor attendance, manage personal training schedules, and keep up-to-date with client
                        progress—all in one place. Simplify billing, reduce paperwork, and boost member satisfaction by providing a seamless 
                        experience.`}
            price={'100-Rs'}
            onCardClick={() => handleNavigate('gym')}
          />
          <Cards
            heading={'Academy Crescentia'}
            paragraph={`The Academy Management System is designed to facilitate efficient administration of educational institutes. It manages
                        student enrollment, attendance, grading, and fee payments with ease. Teachers can track student progress, assign coursework,
                        and communicate effectively with parents. This all-in-one solution ensures a structured and organized learning environment.`}
            price={'200-Rs'}
            onCardClick={() => handleNavigate('academy')}
          />
        </div>
        :
        <>
          <h1 className='font-semibold text-[30px] flex justify-center items-center my-28'>Make sure to login first</h1>
        </>
      }

      <Footer />
    </div>
  )
}

export default Products