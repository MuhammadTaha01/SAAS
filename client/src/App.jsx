import './App.css'
import Home from './Pages/Home'
import ManagementSystemRoutes from './Pages/ManagementSystems/ManagementSystemRoutes'
import SystemVersion from './Pages/ManagementSystems/SystemVersion'
import Products from './Pages/Products'
import Services from './Pages/Services'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ManagementSystems/ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:system' element={<SystemVersion/>} />
        <Route path='/products/:system/:version/*' element={<ManagementSystemRoutes/>} />
        
        
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
