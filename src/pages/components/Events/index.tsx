import React from "react";
import "../Events/Events.scss";
import Blur from "../../../assets/images/blur-img.png";
import Timer from "../../../assets/icons/timer.svg";
import Calendar from "../../../assets/icons/calendar.svg";
import Location from "../../../assets/icons/map-pin.svg";
import Completed from "../../../assets/images/completed.png";
// import Countdown from "react-countdown";
import { useState } from "react";

const Events: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="events-container">
      <div className="mx">
        <div className="event-title">
          <h1>Events.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="event-list">
          <div className="upcoming-event">
            <div
              className="upcoming-title"
              onClick={() => setToggle(true)}
              style={{ borderColor: toggle ? "#00CE53" : "transparent" }}
            >
              <h1>UPCOMING</h1>
            </div>
            <div className="upcoming-image">
              <div className="blur-img">
                <img src={Blur} alt="" />
              </div>
              <div className="lorem-para">
                <div className="lorem">
                  <h3>Lorem Ipsum</h3>
                  <img src={Timer} alt="" />
                </div>
                <div className="flex-content">
                  <div className="calendar">
                    <img src={Calendar} alt="" />
                    <p>23, Jan 2023</p>
                  </div>
                  <div className="location">
                    <img src={Location} alt="" />
                    <p>Tambaram, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="completed-event">
            <div
              className="completed-title"
              onClick={() => setToggle(false)}
              style={{ borderColor: !toggle ? "#00ce53" : "transparent" }}
            >
              <h1>COMPLETED.</h1>
            </div>

            <div className="completed-img">
              <div className="scroll">
                <img src={Completed} alt="" />
                <img src={Completed} alt="" />
                <img src={Completed} alt="" />
                <img src={Completed} alt="" />
                <img src={Completed} alt="" />
                <img src={Completed} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
