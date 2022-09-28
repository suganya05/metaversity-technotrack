import React from "react";
import "../Admission/Admission.scss";

const Admission: React.FC = () => {
  return (
    <div className="admission-container">
      <div className="mx">
        <div className="admission-contant">
          <div className="admission">
            <h4>30+</h4>
            <p>Yesterday Admission</p>
          </div>
          <div className="admission">
            <h4>40+</h4>
            <p>Total Admission</p>
          </div>
          <div className="admission">
            <h4>50+</h4>
            <p>Alumini</p>
          </div>
          <div className="admission">
            <h4>60+</h4>
            <p>Recruites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
