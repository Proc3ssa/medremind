import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const datetime = new Date();
    const today = datetime.toISOString().split('T')[0];
    const navigate = useNavigate();


    const deleteC = () =>{
       Cookies.remove('user');
        navigate('/login');
    }
  return (
    <section id="mra_header_bar" className="col-12">
    <div className="row">
        <div className="col-8 mra_header_title">
            My reminders
        </div>
        <div className="col-4 mra_header_icon">
            <button onClick={deleteC}>Logout</button>
        </div>
        <div className="col-4 mra_header_icon">
           <p className="">{today}</p>
        </div>
    </div>
</section>
  )
}

export default Header
