import { useState } from 'react'
import './App.css'
import HomePage from './components/home/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import UserHome from './components/user/UserHome/UserHome'
import UserLayout from './components/UserLayout'
import AdminLayout from './components/AdminLayout'
import AdminHome from './components/admin/AdminHome/AdminHome'
import NotFound from './NotFound'
import HomePricing from './components/home/HomePricing/HomePricing'
import HomePrivacy from './components/home/HomePrivacy/HomePrivacy'
import HomeContact from './components/home/HomeContact/HomeContact'
import CalculatorLayout from './components/CalculatorLayout'
import CalculatorHome from './components/calculator/CalculatorHome/CalculatorHome'
import SipCalculator from './components/calculator/SipCalculator/SipCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/pricing" element={<HomePricing/>}/>
    <Route path="/privacy" element={<HomePrivacy/>}/>
    <Route path="/contact" element={<HomeContact/>}/>


    <Route path="/user/" element={<UserLayout />}>
      <Route path="home" element={<UserHome/>} />
    </Route>
    
    <Route path="/admin/" element={<AdminLayout />}>
      <Route path="home" element={<AdminHome/>} />
    </Route>

    <Route path="/calculator/" element={<SipCalculator />}>
      <Route path="home" element={<CalculatorHome/>} />
      <Route path="sip" element={<SipCalculator/>} />
    </Route>

    <Route path='*' element={<NotFound/>}/>
  </Routes>
    </>
  )
}

export default App
