import React, {useState} from 'react'
import logo from '../assets/logo-colored.png'

const Login = () => {
const [credentialsError, setCredentialserror] = useState('');

  return (
    <div className='w-screen h-screen bg-slate-900 flex'>
      
      <div className='login'>
        <div className='data'>
          <img src={logo} alt="logo" />
          <p><i>Bringing you the best of Digital Healthcare</i></p>
        </div>
        <div className='inputs'>
          <h3>Login</h3>

          <label className='error' style={{color:'red'}}>{credentialsError}</label>
          <input type="email"  placeholder='Email '/>
          <input type="password" placeholder='Password'/>

          <button type='submit'>Login</button>
          <p style={{marginTop:'20px'}}>Don't have an account? <u><i><a style={{color:'green'}} href="/signup"> Register</a></i></u></p>
          <p style={{fontSize:'12px', marginTop:'10px'}}>Compyright &copy; Processor 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Login
