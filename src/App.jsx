import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PastWork from './components/PastWork'
import DashboardSection from './components/DashboardSection'

function App() {


  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <PastWork/>
        <DashboardSection/>
      </div>
    </>
  )
}

export default App
