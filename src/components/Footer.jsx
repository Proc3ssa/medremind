import React from 'react'

const Footer = () => {
  return (
    <section id="mra_footer" className="col-12">
    <div className="row">
        <div className="col-12">
            <ul>
                <li className="active">
                    <i className="fa fa-bell-o"></i> 
                    <span>Reminders</span>
                </li>
                <li>
                    <i className="fa fa-cog"></i>
                    <span>Settings</span>
                </li>
                <li>
                    <i className="fa fa-user-md"></i>
                    <span>Treatments</span>
                </li>
                <li>
                    <i className="fa fa-user-o"></i>
                    <span>My Account</span>
                </li>
            </ul>
            <button className="btn btn-default btn-lg btnAdd" type="button">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
</section>
  )
}

export default Footer
