import React from 'react'
import capsule from '../assets/capsule.png'
import injection from '../assets/injection.png'


const Body = () => {
  return (
    <section id="mra_body" class="col-12">
    <div class="row mra_body_header">
        <div class="col-3">
            Time
        </div>
        <div class="col-9">
            Medicine
            <select name="medicine">
                <option value="0">All</option>
            </select>
        </div>
    </div>
    <div class="row mra_body_data color-violet">
        <div class="col-3">
            <ul>
                <li>8:00</li>
                <li>8:30</li>
                <li>9:00</li>
            </ul>
        </div>
        <div class="col-9">
            <div class="medicine_info">
                <span class="m_icon">
                    <img src={capsule} alt="" />
                </span>
                <span class="m_info">
                    <span class="m_name">Naproxen</span>
                    <span class="m_dosage">3 piils (10mg)</span>
                    <span class="m_time">
                        <i class="fa fa-clock-o"></i>&nbsp; 08:00 - 09:00
                    </span>
                </span>
                <span class="m_status true">
                    <i class="fa fa-check"></i>
                </span>
            </div>
        </div>
    </div>
    <div class="row mra_body_data color-orange">
        <div class="col-3">
            <ul>
                <li>9:30</li>
                <li>10:00</li>
                <li>10:30</li>
                <li>11:00</li>
            </ul>
        </div>
        <div class="col-9">
            <div class="medicine_info">
                <span class="m_icon">
                    <img src={injection} alt="" />
                </span>
                <span class="m_info">
                    <span class="m_name">Insulin</span>
                    <span class="m_dosage">1 injection (8ml)</span>
                    <span class="m_time">
                        <i class="fa fa-clock-o"></i>&nbsp; 09:00 - 11:00
                    </span>
                </span>
                <span class="m_status false">
                    <i class="fa fa-check"></i>
                </span>
            </div>
        </div>
    </div>
</section>
   )
}

export default Body
