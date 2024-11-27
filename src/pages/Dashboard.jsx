import React, {useState} from 'react'
import Header from '../components/Header'
import Months from '../components/Months'


import Footer from '../components/Footer'

const Dashboard = () => {
   const date = new Date(); 
   const [day, setDay] = useState(date.getDay());
   const [month, setMonth] = useState(date.getMonth());

  return (
    <div className="container-fluid">
            
    <div id="mra_app" className="row">
    <Header />
    <Months />
    
     
   <Footer />
    
    </div>

    </div>
  )
}

export default Dashboard
