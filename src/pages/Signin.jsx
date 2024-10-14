import React, {useState} from 'react'
import logo from '../assets/logo-colored.png'

const Signin = () => {
const [credentialsError, setCredentialserror] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



const handleSubmit = async (e) =>{
  e.preventDefault();

  const credentials = {
    email:email,
    password:password
  }

  try {

    const FETCH = await fetch('http://localhost:666/signin.php', 
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
     body: JSON.stringify(credentials)
      }
    );

    const response = await FETCH.json();

    if(response.success){
      setCredentialserror('Correct credentials');
    }
    else{
      setCredentialserror('wrong credentials')
    }
    
  } catch (error) {
    setCredentialserror(error.message);
  }

}

  return (
    <div className='w-screen h-screen bg-slate-900 flex'>
      
      <div className='signin'>
        <div className='data'>
          <img src={logo} alt="logo" />
          <p><i>Bringing you the best of Digital Healthcare</i></p>
        </div>
        <div className='inputs'>
          <h3>Signin</h3>
   <form onSubmit={handleSubmit}>
          <label className='error' style={{color:'red'}}>{credentialsError}</label>
          <input type="email"  placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

          <button type='submit'>Signin</button>
          <p style={{marginTop:'20px'}}>Don't have an account? <u><i><a style={{color:'green'}} href="/signup"> Register</a></i></u></p>
          </form>
          <p style={{fontSize:'12px', marginTop:'10px'}}>Compyright &copy; Processor 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Signin
