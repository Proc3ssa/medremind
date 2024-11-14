import React, { useState, useEffect } from 'react';
import { Await, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Add = () => {
  
  const navigate = useNavigate()
  
   const user = Cookies.get('user');

   if(!user){
      useEffect(()=>{
        navigate('/login?from=add')
      },[])
   }
   const datetime = new Date();
   const today = datetime.toISOString().split('T')[0];
   const [prescription, setPrescription] = useState('');
   const [date, setDate] = useState('');
   const [to, setTo] = useState('');
   const [from, setFrom] = useState('');
   const [message, setMessage] = useState('');

   function getcolor() {
    const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const opacity = 80;

    return `#${color}${opacity}`;
  }
  
  const  getPrescriptions = async () =>{
      
      try {
        const getPre = await fetch(`localhost:666/getprescription.php?user=${user}` , {
          method : 'GET',
          headerd : {
            'Content-type' : 'application/json'
          }
          });

          setPrescription(await getPre.json());
        
      } catch (error) {
        setMessage('could not fetch prescriptions')
      }
  }

  getPrescriptions();
  
  
  
  
   const handleSubmit = () =>{

    }

  

  



  return (
    <div className="w-screen h-screen bg-slate-900 flex">
      <div className="signup">
        <div className="edit">
          <h3>New Reminder</h3>
          <h4 className='success'>{message}</h4>
          <form onSubmit={handleSubmit}>

            
            <section className='prescriptions'>
                <fieldset>
                    <legend>Prescriptions</legend>
                   
                    <input type="radio" id="option1" name="options" value="Option 1" />
                    <label for="option1" style={{backgroundColor:getcolor()}}class="radio-button"><h3>Amoxicillen</h3> 
                    <p>26mg</p></label>

                    <input type="radio" id="option2" name="options" value="Option 2" />
                    <label for="option2" class="radio-button"><h3>Amoxicillen</h3> 
                    <p>26mg</p></label>

                    <input type="radio" id="option3" name="options" value="Option 3" />
                    <label for="option3" class="radio-button"><h3>Amoxicillen</h3> 
                    <p>26mg</p></label>

                    {/* <option  className='prescription' >
                        <h3>Amoxicillen</h3> 
                        <p>26mg</p>
                    </option> */}
                    
                </fieldset>

                <section className='dates'>
                  <label htmlFor=""><b>Date</b></label><p></p>
                <input type="date" name="" id="" min={today} value={date} onChange={(e) => setDate(e.target.value)}/>
                <label htmlFor=""><b>Time</b></label><p></p>
                <p>from</p>
                <input type="time" name="" id="" onChange={(e) => setFrom(e.target.value)} value={from}/>

                <p>to</p>
                <input type="time" name="" id="" value={to} onChange={(e) => setTo(e.target.value)}/>
                </section>
                 
                

            </section>
           

           

            

            <button type="submit">Add</button>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Add;
