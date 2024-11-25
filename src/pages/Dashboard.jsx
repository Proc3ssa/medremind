import React from 'react'
import Header from '../components/Header'
import Months from '../components/Months'
import Dates from '../components/Dates'
import Body from '../components/Body'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className="container-fluid">
            
    <div id="mra_app" className="row">
    <Header />
    <Months />
    <Dates />
    <Body />
    <Footer />
    
    </div>

    </div>
  )
}

export default Dashboard
