import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Add = () => {
  const navigate = useNavigate();
  const user = Cookies.get('user');

  // Redirect if user is not found
  useEffect(() => {
    if (!user) {
      navigate('/login?from=add');
    }
  }, [user]);

  const datetime = new Date();
  const today = datetime.toISOString().split('T')[0];
  const [prescriptions, setPrescriptions] = useState([]);
  const [prescriptionValue, setPrescriptionValue] = useState('');
  
  const [date, setDate] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');
  const [PreError, setPreError] = useState('');
  const [submit, setsubmit] = useState(false);

  
  function getcolor() {
    const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const opacity = 80;
    return `#${color}${opacity}`;
  }

  const prescriptionSelect = (e) =>{
    setPrescriptionValue(e.target.value);
    
    setPreError('')
  }

  
  useEffect(() => {
    const getPrescriptions = async () => {
      try {
        const response = await fetch(`http://localhost:666/getprescription.php?user=${user}`, {
          headers: {
            'Content-type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPrescriptions(data);
        } else {
          setMessage('Could not fetch prescriptions');
        }
      } catch (error) {
        setMessage('Could not fetch prescriptions');
      }
    };

    if (user) {
      getPrescriptions();
    }
  }, []);
  
const handleSubmit = async (e) =>{
  e.preventDefault();

  if(prescriptionValue == ""){
    setPreError('Select a prescription');
    setsubmit(false);
  }
  else{
    setsubmit(true);

    const data = {
      prescriptionValue : prescriptionValue,
      to : to,
      from : from,
      user : user,
      date : date
    }

    if(setsubmit){
      try {
        const Submit = await fetch(`http://localhost:666/new.php`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
  
        const response = await Submit.json();

        
          setMessage(response.message);
        

        console.log(response);
  
      } catch (error) {
        console.log('fetch error');
      }

      finally{
        // console.log(data)
      }
    }
  }

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

                    {
                      prescriptions.map((prescription, id) =>(<><input type="radio" id={id} name="options" value={prescription.id} onClick={prescriptionSelect}/>
                        <label for={id} style={{backgroundColor:getcolor()}} class="radio-button" ><h3>{prescription.medicine}</h3> 
                        <p>{prescription.dossage}</p></label></>)
                    )
                    }
                   
                      <p style={{color:'red'}}>{PreError}</p>
                    
                </fieldset>

                <section className='dates'>
                  <label htmlFor=""><b>Date</b></label><p></p>
                <input type="date" name="" id="" min={today} value={date} onChange={(e) => setDate(e.target.value)} required/>
                <label htmlFor=""><b>Time</b></label><p></p>
                <p>from</p>
                <input type="time" name="" id="" onChange={(e) => setFrom(e.target.value)} value={from} required/>

                <p>to</p>
                <input type="time" name="" id="" value={to} onChange={(e) => setTo(e.target.value)} required/>
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
