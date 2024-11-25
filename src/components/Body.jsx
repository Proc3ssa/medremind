import React from 'react'

const Body = () => {
  return (
    <section id="mra_body" className="col-12">
    <div className="row mra_body_header">
        <div className="col-3">
            Time
        </div>
        <div className="col-9">
            Medicine
            <select name="medicine">
                <option value="0">All</option>
            </select>
        </div>
    </div>
    <div className="row mra_body_data color-violet">
        <div className="col-3">
            <ul>
                <li>8:00</li>
                <li>8:30</li>
                <li>9:00</li>
            </ul>
        </div>
        <div className="col-9">
            <div className="medicine_info">
                <span className="m_icon">
                    <img src="imgs/capsule.png" alt="" />
                </span>
                <span className="m_info">
                    <span className="m_name">Naproxen</span>
                    <span className="m_dosage">3 piils (10mg)</span>
                    <span className="m_time">
                        <i className="fa fa-clock-o"></i>&nbsp; 08:00 - 09:00
                    </span>
                </span>
                <span className="m_status true">
                    <i className="fa fa-check"></i>
                </span>
            </div>
        </div>
    </div>
    <div className="row mra_body_data color-orange">
        <div className="col-3">
            <ul>
                <li>9:30</li>
                <li>10:00</li>
                <li>10:30</li>
                <li>11:00</li>
            </ul>
        </div>
        <div className="col-9">
            <div className="medicine_info">
                <span className="m_icon">
                    <img src="imgs/injection.png" alt="" />
                </span>
                <span className="m_info">
                    <span className="m_name">Insulin</span>
                    <span className="m_dosage">1 injection (8ml)</span>
                    <span className="m_time">
                        <i className="fa fa-clock-o"></i>&nbsp; 09:00 - 11:00
                    </span>
                </span>
                <span className="m_status false">
                    <i className="fa fa-check"></i>
                </span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Body
