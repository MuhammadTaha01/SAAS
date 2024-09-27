import './App.css'
import Home from './Pages/Home'
import ManagementSystemRoutes from './Pages/ManagementSystems/ManagementSystemRoutes'
import SystemVersion from './Pages/ManagementSystems/SystemVersion'
import Products from './Pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:system' element={<SystemVersion/>} />
        <Route path='/products/:system/:version/*' element={<ManagementSystemRoutes/>} />
        
        
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
