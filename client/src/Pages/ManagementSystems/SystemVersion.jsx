import React, { useEffect } from 'react'
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

    useEffect(()=>
    {
        window.scrollTo(0,0);
    },[])

  return (
    <div className=''>
        <Navbar/>
        <div className="flex items-center justify-center">
            <Cards
                heading={'🌟 Basic Plan'}
                paragraph={`Kickstart your journey with the essentials! Enjoy foundational features that help you manage
                            your tasks efficiently. Perfect for those just starting out! 🚀`}
                onCardClick={() => handleVersion('basic')}
            />
            <Cards
                heading={`🚀 Pioneer Plan`}
                paragraph={`Take the lead with our Pioneer Plan! Unlock advanced features and tools designed for growth and innovation.
                            Ideal for trailblazers ready to elevate their game! 🌍✨`}
                onCardClick={() => handleVersion('pioneer')}
            />
            <Cards
                heading={`🏆 Premium Plan`}
                paragraph={`Experience the ultimate advantage with our Premium Plan! Gain access to exclusive features and personalized
                            support for unmatched success. Elevate your business to new heights! 🔥💼`}
                onCardClick={() => handleVersion('premium')}
            />
        </div>
        <Footer/>
    </div>
  )
}

export default SystemVersion