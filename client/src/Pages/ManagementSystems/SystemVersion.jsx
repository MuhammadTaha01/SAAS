import React from 'react'
import Cards from '../../CommonComponents/Cards'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { useNavigate, useParams } from 'react-router-dom'

const SystemVersion = () => {

    const navigate = useNavigate();
    const { system } = useParams();

    const handleVersion = (version) =>
    {
        navigate(`/products/${system}/${version}/dashboard`)
        console.log(system, version);

    }

  return (
    <div className=''>
        <Navbar/>
        <div className="flex items-center justify-center">
            <Cards
                heading={'Trial Version'}
                onCardClick={() => handleVersion('trial')}
            />
            <Cards
                heading={'Buy Version'}
                onCardClick={() => handleVersion('buy')}
            />
        </div>
        <Footer/>
    </div>
  )
}

export default SystemVersion