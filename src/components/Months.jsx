import React, { useEffect, useState } from 'react';
import injection from '../assets/injection.png';
import medicine from '../assets/capsule.png';
import syrup from '../assets/cough-syrup.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Months = () => {
const user = Cookies.get('user');
const navigate = useNavigate()

if(!user){
  navigate('/login')
}
    
const today = new Date(); // Current date and time

// Reset time to only compare dates (ignoring hours, minutes, seconds)
today.setHours(0, 0, 0, 0);

  
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [months, setMonths] = useState([
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ]);

  const [reminders, setReminders] = useState([]);
  const [day, setDay] = useState(date.getDate());

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

  useEffect(() => {
    const getReminder = async () => {
      try {
        const response = await fetch(
          `http://localhost:666/getReminders.php?user=${user}&day=${day}&month=${month}`
        );
        const data = await response.json();
        setReminders(data);
        console.log(data)
      } catch (error) {
        console.log('internal server error');
      }
    };

    getReminder();
  }, [day, month]);

  return (
    <>
      <section id="mra_months_bar" className="col-12">
        <div className="row">
          <div className="col-12">
            <ul>
              {months.map((mont, key) => (
                key === month ? (
                  <li key={key} className="active" onClick={() => setMonth(key)}>
                    {mont}
                  </li>
                ) : (
                  <li key={key} onClick={() => setMonth(key)}>
                    {mont}
                  </li>
                )
              ))}
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
              {visibleItems.map((item) => (
                <li
                  key={item.date}
                  className={item.date === day ? "active" : ""}
                  onClick={() => setDay(item.date)}
                >
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

      <section id="mra_body" className="col-12">
        <div className="row mra_body_header">
          <div className="col-3">Time</div>
          <div className="col-9">
            Medicine
            <select name="medicine">
              <option value="0">All</option>
              <option value="5">5 records</option>
              <option value="10">10 records</option>
            </select>
          </div>
        </div>

        {reminders.length === 0 ? (
          <p>No records for said date</p>
        ) : (
          reminders.map((rem) => (
            <div
              key={rem.id}
              className={
                rem.prescriptions[0]?.type === 'Pill'
                  ? "row mra_body_data color-violet"
                  : rem.prescriptions[0]?.type === 'Injection'
                  ? "row mra_body_data color-orange"
                  : "row mra_body_data color-green"
              }
            >
              <div className="col-3">
                <ul>
                  <li>{rem.time}</li>
                  <li></li>
                  <li>{rem.time2}</li>
                </ul>
              </div>
              <div className="col-9">
                <div className="medicine_info">
                  <span className="m_icon">
                    <img
                      src={
                        rem.prescriptions[0]?.type === 'Pill'
                          ? medicine
                          : rem.prescriptions[0]?.type === 'Injection'
                          ? injection
                          : syrup
                      }
                      alt=""
                    />
                  </span>
                  <span className="m_info">
                    <span className="m_name">{rem.prescriptions[0]?.medicine}</span>
                    <span className="m_dosage">
                      {`${rem.prescriptions[0]?.amount} ${rem.prescriptions[0]?.type} (${
                        rem.prescriptions[0]?.dossage || ""
                      })`}
                    </span>
                    <span className="m_time">
                      <i className="fa fa-clock-o"></i>&nbsp;
                      {`${rem.time} ${rem.time2}`}
                    </span>
                  </span>
                  <span className={

                    today > new Date(rem.date) ? "m_status true" : "m_status " 

                  }>
                    <i className="fa fa-check"></i>
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Months;
