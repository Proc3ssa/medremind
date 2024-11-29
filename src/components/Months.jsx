import React, {useState} from 'react'
import injection from '../assets/injection.png'
import medicine from '../assets/capsule.png'

const Months = () => {
    const date = new Date(); 
    const [month, setMonth] = useState(date.getMonth());
    const [months, setMonths] = useState([
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ])

    const [day, setDay] = useState(date.getDate());
    console.log(day);
    
    const items = [
        
        { date: 1, medicines: ["orange"] },
        { date: 2 },
        { date: 3, medicines: ["violet", "orange"] },
        { date: 4, medicines: ["orange"] },
        { date: 5, medicines: ["green"] },
        { date: 6 },
        { date: 7, medicines: ["orange"] },
        { date: 8 },
        { date: 9, medicines: ["violet", "orange"] },
        { date: 10, medicines: ["orange"] },
        { date: 11, medicines: ["green"] },
        { date: 12 },
        { date: 13 },
        { date: 14, medicines: ["orange"] },
        { date: 15 },
        { date: 16, medicines: ["violet", "orange"] },
        { date: 17, medicines: ["orange"] },
        { date: 18, medicines: ["green"] },
        { date: 19 },
        { date: 20, medicines: ["orange"] },
        { date: 21 },
        { date: 22, medicines: ["violet", "orange"] },
        { date: 23, medicines: ["orange"] },
        { date: 24, medicines: ["green"] },
        { date: 25, medicines: ["orange"] },
        { date: 27 },
        { date: 28, medicines: ["violet", "orange"] },
        { date: 29, medicines: ["orange"] },
        { date: 30, medicines: ["green"] },
        { date: 31 },
        
        // Add more items as needed
      ];
    
      const visibleItemsCount = 6; // Number of items visible at a time
      const [startIndex, setStartIndex] = useState(0);
    
      // Handle Next Button
      const nextSlide = () => {
        if (startIndex + visibleItemsCount < items.length) {
          setStartIndex(startIndex + 1);
        }
      };
    
      // Handle Previous Button
      const prevSlide = () => {
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
        }
      };
    
      // Get the visible items
      const visibleItems = items.slice(startIndex, startIndex + visibleItemsCount);
    

    

  return (
    <>
    <section id="mra_months_bar" className="col-12">
            <div className="row">
                <div className="col-12">
                    <ul>
                        {
                        months.map((mont,key) => (
                        key == month ? 
                        <li key={key} value={key}className="active"  onClick={(e)=> setMonth(e.target.value)}>{mont}</li>
                            :
                        <li key={key} value={key} onClick={(e)=> setMonth(e.target.value)}>{mont} </li> 
                        ))
                        }
                        
                        {/* 
                         */}
                        
                    </ul>
                </div>
            </div>
        </section>

        <section id="mra_date_bar" className="col-12">
      <div className="row">
        <div className="col-12">
          {/* Navigation Buttons */}
          <button onClick={prevSlide} disabled={startIndex === 0}>
            ❮
          </button>
          <ul>
            {visibleItems.map((item, index) => (
              <li key={index} className={item.date === day ? "active" : ""} onClick={()=> setDay(item.date)}>
                <div>
                  <span className="medicines">
                    {item.medicines &&
                      item.medicines.map((color, i) => (
                        <span
                          key={i}
                          className={`color-${color}`}
                        ></span>
                      ))}
                  </span>
                  <span className="date">{item.date}</span>
                  <span className="day">{item.day}</span>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={nextSlide}
            disabled={startIndex + visibleItemsCount >= items.length}
          >
            ❯
          </button>
        </div>
      </div>
    </section>

    <section id="mra_body" class="col-12">
                    <div class="row mra_body_header">
                        <div class="col-3">
                            Time
                        </div>
                        <div class="col-9">
                            Medicine
                            <select name="medicine">
                                <option value="0">All</option>
                                <option value="5">5 records</option>
                                <option value="10">10 records</option>
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
                                    <img src={medicine} />
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
                                    <img src={injection}  />
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

        
        </>
  )
}

export default Months
