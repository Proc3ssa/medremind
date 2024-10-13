import React, {useEffect} from 'react'
import logo from '../assets/logo-trans.png';

 

const Index = () => {

setTimeout( ()=>{
  window.location.href = '/login';
}, 2000)

  return (
    <div className='bg-blue-500 w-screen h-screen m-0 justify-items-center items-center flex'>
        <div className="container m-auto w-fit h-[400px]">
             <img src={logo} alt="logo" width={100} className='mx-auto mt'/>
             <p className='text-white mx-auto mt-40 text-center'>by</p>
             <p className='text-white text-xl font-bold mx-auto mt-10'>P R O C E S S O R</p>
        </div>
     
    </div>
  )
}

export default Index
