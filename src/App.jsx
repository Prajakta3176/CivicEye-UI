
import './App.css'
import 'leaflet/dist/leaflet.css';

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PastWork from './components/PastWork'
import DashboardSection from './components/DashboardSection'
import IssueReportForm from './components/IssueReportForm';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <PastWork/>
        <DashboardSection/>
        <IssueReportForm/>
        <HowItWorks/>
        <Footer/>

      </div>
    </>
  )
}

export default App
