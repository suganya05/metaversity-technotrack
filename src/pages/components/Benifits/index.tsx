import React from "react";
import Education from "../../../assets/images/education.png";
// import Admission from "../../../assets/images/admission-img.png";
// import Access from "../../../assets/images/access-img.png";
// import Services from "../../../assets/images/services-img.png";
// import Events from "../../../assets/images/events-img.png";
// import Job from "../../../assets/images/job-assurance-img.png";
import "../Benifits/Benifits.scss";

const DemoComponent = ({ title, position }: any) => {
  return (
    <div
      className={
        position === "right" ? "benifits-content-right" : "benifits-content"
      }
    >
      <div>
        <img src={Education} alt="" />
      </div>
      <div className="education-para">
        <input type="checkbox" id="check" />
        <h2>{title}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <label htmlFor="check">Learn More</label>
      </div>
    </div>
  );
};

const Benifits: React.FC = () => {
  return (
    <div className="benifits-contanier">
      <div className="mx">
        <h2>Benifits.</h2>

        <DemoComponent title="one" />
        <DemoComponent title="two" position="right" />
        <DemoComponent />
      </div>
    </div>
  );
};

export default Benifits;
