import React, { useState } from 'react';


const Signup = () => {
  const [emailError, setEmailError] = useState({eror:false, msg:''});
  const [phoneError, setPhoneError] = useState({eror:false, msg:''});
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

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
        console.log(response.message);
        if(data.fieldtype == 'email'){
          setEmailError({
            error:true,
            msg: 'email is already in use'
          })
        }
        else{
          setPhoneError({
            error:true,
            msg: 'number is already in use'
          })
        }
      }
      else{
        console.log(response.message);
      }
   

  }
  
// check password 
  const checkPassword = (e) => {
    setPassword2(e.target.value);

    if (password1 !== e.target.value) {
      setPasswordError('Password mismatch');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(emailError.eror || phoneError.error){
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
      alert(result.message);
      // Optionally redirect to login or dashboard
      window.location.href = '/login';
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex">
      <div className="signup">
        <div className="inputs">
          <h3>Signup</h3>
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
            <h1>{passwordError}</h1>

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
