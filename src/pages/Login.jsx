import React, {useState, useEffect} from 'react'
import logo from '../assets/logo-colored.png'
import { ThreeDots } from 'react-loader-spinner';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [credentialsError, setCredentialserror] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isloading, setisLoading] = useState(false)
const navigate = useNavigate();
const user = Cookies.get('user');


useEffect(() => {
  if (user) {
    navigate('/dashboard');
  }
}, [user]);


const handleSubmit = async (e) =>{
  e.preventDefault();
  
  setisLoading(true);

  setTimeout(()=>{
    setisLoading(false)
  },3000)

  const credentials = {
    email:email,
    password:password
  };
  console.log(credentials);

  try {

    const FETCH = await fetch('/api/login.php', 
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
      }
      
    );

    const response = await FETCH.json();

    if(response.ok){
      Cookies.set('user', email, { expires: 7 });
       navigate('/dashboard')
    }
    else{
      setisLoading(false);
      setCredentialserror(response.message)
    }
    
  } catch (error) {
    setCredentialserror("catch:" + error.message);
  }

}

  return (
    <div className='w-screen h-screen bg-slate-900 flex'>
      
      <div className='login'>
        <div className='data'>
          <img src={logo} alt="logo" />
          <p><i>Bringing you the best of Digital Healthcare</i></p>
        </div>
        <div className='inputs'>
          <h3>Login</h3>
   <form onSubmit={handleSubmit}>
          <label className='error' style={{color:'red'}}>{credentialsError}</label>
          <input type="email"  placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

          <button type='submit' >{
           isloading ? (
            <>
             Login <ThreeDots height="20" width="20" color="white" style={{textAlign : "center"}}/>
            </>
          ) : (
            'Login'
          )
             
            }</button>
          <p style={{marginTop:'20px'}}>Don't have an account? <u><i><a style={{color:'green'}} href="/signup"> Register</a></i></u></p>
          </form>
          <p style={{fontSize:'12px', marginTop:'10px'}}>Compyright &copy; Processor 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Login
