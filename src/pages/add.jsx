import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Add = () => {
  
   function select(e){
      e.target.style.width = "100px";
      e.target.style.backgroundColor = "gray";
   }

    const handleSubmit = () =>{

    }

  

  



  return (
    <div className="w-screen h-screen bg-slate-900 flex">
      <div className="signup">
        <div className="edit">
          <h3>New Reminder</h3>
          <h4 className='success'>{}</h4>
          <form onSubmit={handleSubmit}>

            
            <section className='prescriptions'>
                <fieldset>
                    <legend>Prescriptions</legend>
                   
                   <button type='button' className='prescription' onClick={select}>
                        <h3>Amoxicillen</h3> 
                        <p>26mg</p>
                    </button>

                    
                </fieldset>

                

            </section>
           

           

            

            <button type="submit">Signup</button>
            <p style={{ marginTop: '20px' }}>
              already have an account?{' '}
              <u>
                <i>
                  <a style={{ color: 'green' }} href="/login">
                    Signin
                  </a>
                </i>
              </u>
            </p>
          </form>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            Copyright &copy; Processor 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Add;
