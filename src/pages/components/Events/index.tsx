import React from "react";
import "../Events/Events.scss";
import Timer from "../../../assets/icons/timer.svg";
import Calendar from "../../../assets/icons/calendar.svg";
import Location from "../../../assets/icons/map-pin.svg";
import Completed from "../../../assets/images/completed.png";
import Countdown from "react-countdown";

const Events: React.FC = () => {
  return (
    <div className="events-container">
      <div className="mx">
        <h1>Events.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="events-content">
          <h5 className="text-coloring">UPCOMING.</h5>

          <div className="upcoming">
            <div className="timer-content">
              <div className="background-img"> </div>
              <div className="lorem">
                <h3>Lorem Ipsum</h3>

                <div className="timer-img">
                  <img src={Timer} alt="" />
                </div>
                <div className="timer">
                  <Countdown date={Date.now() + 1000000} />
                </div>
                <div className="content">
                  <div className="calendar">
                    <div>
                      <img src={Calendar} alt="" />
                    </div>
                    <div>
                      <p>23, Jan 2023</p>
                    </div>
                  </div>
                  <div className="calendar">
                    <div>
                      <img src={Location} alt="" />
                    </div>
                    <div>
                      <p>23, Jan 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="completed-content">
              <h3>COMPLETED.</h3>
              <div className="completed-img">
                <div>
                  <img src={Completed} alt="" />
                </div>
                <div>
                  <img src={Completed} alt="" />
                </div>
                <div>
                  <img src={Completed} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
