import React from "react";
import Google from "../../../assets/logos/google.png";
import Aicte from "../../../assets/logos/aicte.png";
import "../Recognition/Recognition.scss";

const Recongnition: React.FC = () => {
  return (
    <div className="recongnition-container">
      <div className="mx">
        <h1>Recognition & Accreditations</h1>
        <div className="recongnition-content">
          <div className="google-content">
            <div className="google-img">
              <img src={Google} alt="" />
            </div>
            <div className="google-para">
              <h5>Google for education partners</h5>
              <p>Official authorised partner</p>
            </div>
          </div>

          <div className="google-content">
            <div className="google-img">
              <img src={Aicte} alt="" />
            </div>
            <div className="google-para">
              <h5>All India Council for Technical Education(AICTE).</h5>
              <p>Approved by AICTE</p>
            </div>
          </div>

          <div className="google-content">
            <div className="google-img">
              <img src={Google} alt="" />
            </div>
            <div className="google-para">
              <h5>Google for education partners</h5>
              <p>Official authorised partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recongnition;
