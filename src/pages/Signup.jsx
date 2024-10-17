import React, { useState } from 'react';


const Signup = () => {
  const [emailError, setEmailError] = useState({eror:false, msg:''});
  const [phoneError, setPhoneError] = useState({eror:false, msg:''});
  const [passwordError, setPasswordError] = useState({eror:false, msg:''});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message,setMessage] = useState('');

  // check email and phone 
  const checkValidity = async  (e) =>{
    e.preventDefault();
   const data = {
    fieldtype : e.target.type,
    fielddata : e.target.value
  }

   data.fieldtype == 'email' ? setEmail(data.fielddata) : setPhone(data.fielddata)

   

    const fech = await fetch('http://localhost:666/checkvalidity.php', 
      {
        method:'POST',
        headers :{
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)

      }) ;

      const response = await fech.json();

      if(response.exists){
        console.log(response.exists);
        if(data.fieldtype == 'email'){
          setEmailError({
            eror:true,
            msg: 'email is already in use'
          })
        }
        else{
          setPhoneError({
            eror:true,
            msg: 'number is already in use'
          })
        }
      }
      else{
        console.log(response.exists);
        if(data.fieldtype == 'email'){
          setEmailError({
            eror:false,
            msg: ''
          })
        }
        else{
          setPhoneError({
            eror:false,
            msg: ''
          })
        }
      }
   

  }
  
// check password 
  const checkPassword = (e) => {
    setPassword2(e.target.value);

    if (password1 !== e.target.value) {
      setPasswordError({eror:true, msg:'password mismatch'});
    } else {
      setPasswordError({eror:false, msg:''});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailError, phoneError, passwordError);

    if(emailError.eror || phoneError.eror || passwordError.eror){
      return
    }

    const formData = {
      name: name,
      email: email,
      phone: phone,
      password: password1,
    };

    const response = await fetch('http://localhost:666/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.signedup) {
      setMessage('You have successfully created an account')
      setTimeout( () =>{
        window.location.href = '/login';
      }, 2000)
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex">
      <div className="signup">
        <div className="inputs">
          <h3>Signup</h3>
          <h4 className='success'>{message}</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={checkValidity}
              required
            />
            <h1>{emailError.msg}</h1>

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={checkValidity}
              required
            />
            <h1>{phoneError.msg}</h1>

            <input
              type="password"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={checkPassword}
              required
            />
            <h1>{passwordError.msg}</h1>

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

export default Signup;
