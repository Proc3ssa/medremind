import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
  return (
    <section id="mra_footer" className="col-12">
    <div className="row">
        <div className="col-12">
            <ul>
                <li className="active">
                    <i className="fa fa-bell-o"></i> 
                    <span>Reminders</span>
                </li>
                <a href='/new-prescription'><li className=''>
                    <i className="fa fa-plus"></i> Add prescription
                    <span></span>
                </li></a>
                {/* <li>
                    <i className="fa fa-user-md"></i>
                    <span>Treatments</span>
                </li>
                <li>
                    <i className="fa fa-user-o"></i>
                    <span>My Account</span>
                </li> */}
            </ul>
            
            <button onClick={() => navigate('/add')} className="btn btn-default btn-lg btnAdd" type="button" title='add reminder'>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
</section>
  )
}

export default Footer
