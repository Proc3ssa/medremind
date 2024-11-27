import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import capsule from '../assets/capsule.png'
import injection from '../assets/injection.png'
import syrup from '../assets/cough-syrup.png'

const Addprescription = () => {
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
  const [prescriptions, setPrescriptions] = useState([
    {type : 'Pill', img : capsule},
    {type : 'Injection', img : injection},
    {type : 'Syrup', img : syrup}
  ]);
  const [prescriptionValue, setPrescriptionValue] = useState('');
  
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [dossage, setdossage] = useState('');
  const [submit, setsubmit] = useState(false);

  
  function getcolor() {
    const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const opacity = 80;
    return `#${color}${opacity}`;
  }

  const prescriptionSelect = (e) =>{
    setType(e.target.value);
    setsubmit(true)
   
  }

  
  
  
const handleSubmit = async (e) =>{
  e.preventDefault();

  if(type == ""){
    setPreError('Select a prescription');
    setsubmit(false);
  }
  else{
    setsubmit(true);

    const data = {
      prescriptionValue : prescriptionValue,
      name : name,
      type : type,
      amount : amount,
      dossage : dossage,
      user : user
    }

    if(setsubmit){
      try {
        const Submit = await fetch(`http://localhost:666/new-prescription.php`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
  
        const response = await Submit.json();
        if(response){
            setMessage(response.message)
        }
        else{
            setMessage(response.message)
        }
        
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
          <h3>New Prescription</h3>
          <h4 className='success'>{message}</h4>
          <form onSubmit={handleSubmit}>

            
            <section className='prescriptions'>
                
                    <h3>Prescription Type</h3><p>- </p>

                    {
                      prescriptions.map((prescription, id) =>(<><input type="radio" id={id} name="options" value={prescription.type} onClick={prescriptionSelect}/>
                        <label for={id} style={{backgroundColor:getcolor()}} class="radio-button" ><h3>{prescription.type}</h3> 
                        <p><img src={prescription.img} width={30} /></p></label></>)
                    )
                    }
                   
                     
                    
                

                <section className='dates'>
                  <label htmlFor=""><b>Prescription name</b></label><p></p>
                <input type="text" name="" id=""  value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor=""><b>Number of {type}s</b></label><p></p>
                
                <input type="number" name="" id="" onChange={(e) => setAmount(e.target.value)} value={amount} required  />

                <label htmlFor=""><b>Dossage</b></label><p></p>
                <input type="text" name="" id="" value={dossage} onChange={(e) => setdossage(e.target.value)} required  placeholder='e,g 12ml'/>
                </section>
                 
                

            </section>
           

           

            

            <button type="submit">Add</button>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Addprescription;
