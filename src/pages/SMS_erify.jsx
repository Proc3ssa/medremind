import React, {useState} from 'react'


const SMSverify = () => {
const [code, setCode] = useState('');
const [codeError, setCodeError] = useState('');
const [isdisabled, setIsdisabled] = useState(true);
const [btnbgcolor, setbtnbgcolor] = useState({
    background : "#020f29",
    color : 'gray'
})


const handleCode = (e) =>{
    setCode(e.target.value)
    let codex = e.target.value;
    if(codex.length == 4){
        setbtnbgcolor({
            background : '#042768',
            color : 'white'
        })

        setIsdisabled(false)
    }
    else{
        setbtnbgcolor({
             background : "#020f29",
             color : 'gray'
        })

        setIsdisabled(true)
    }
}


const handleSubmit = async (e) =>{
  e.preventDefault();
  
 

  try {

    const FETCH = await fetch('http://localhost:666/verifyphone.php', 
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: code
      }
      
    );

    const response = await FETCH.json();

   
    
  } catch (error) {
    
  }

}

  return (
    <div className='w-screen h-screen bg-slate-900 flex'>
      
      <div className='login' style={{width:'400px', height:'fit-content'}}>
       
        <div className='inputs'>
          <h3>Verify Phone</h3>
   <form onSubmit={handleSubmit}>
          <label className='error' style={{color:'red'}}>
            <p className='text-black'>A verification code has been sent to your phone, enter it to activate your account</p>
            {codeError}</label>
          <input type="number"  placeholder='code' value={code} onChange={handleCode} required/>
        

          <button type='submit' style={{backgroundColor : btnbgcolor.background, color : btnbgcolor.color}}disabled = {isdisabled}>verify</button>
          
          </form>
          <p style={{fontSize:'12px', marginTop:'10px'}}>Compyright &copy; Processor 2024</p>
        </div>
      </div>
    </div>
  )
}

export default SMSverify
