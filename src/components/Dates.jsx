import React from 'react'

const Dates = () => {
  return (
    <section id="mra_date_bar" className="col-12">
    <div className="row">
        <div className="col-12">
            <ul>
                <li>
                    <div>
                        <span className="medicines">
                            <span className="color-orange"></span>
                        </span>
                        <span className="date">25</span>
                        <span className="day">Fri</span>    
                    </div>
                </li>
                <li>
                    <div>
                        <span className="medicines">
                            <span className="color-violet"></span>
                            <span className="color-orange"></span>
                        </span>
                        <span className="date">26</span>
                        <span className="day">Sat</span>    
                    </div>
                </li>
                <li>
                    <div>
                        <span className="date">27</span>
                        <span className="day">Sun</span>    
                    </div>
                </li>
                <li className="active">
                    <div>
                        <span className="medicines">
                            <span className="color-violet"></span>
                            <span className="color-orange"></span>
                        </span>
                        <span className="date">28</span>
                        <span className="day">Mon</span>    
                    </div>
                </li>
                <li>
                    <div>
                        <span className="medicines">
                            <span className="color-orange"></span>
                        </span>
                        <span className="date">29</span>
                        <span className="day">Tue</span>    
                    </div>
                </li>
                <li>
                    <div>
                        <span className="medicines">
                            <span className="color-green"></span>
                        </span>
                        <span className="date">30</span>
                        <span className="day">Wed</span>    
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default Dates
