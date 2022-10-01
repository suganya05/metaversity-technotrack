import React from "react";
import Education from "../../../assets/images/education.png";
import Admission from "../../../assets/images/admission-img.png";
import Access from "../../../assets/images/access-img.png";
import Services from "../../../assets/images/services-img.png";
import Events from "../../../assets/images/events-img.png";
import Job from "../../../assets/images/job-assurance-img.png";
import "../Benifits/Benifits.scss";
import { Button } from "../../../components";

interface IBenifits {
  title: string;
  description: string;
  img: string;
  poision: string;
}

const DemoBenifits: React.FC<IBenifits> = ({
  title,
  description,
  img,
  poision,
}) => {
  return (
    <div
      className={
        poision === "right" ? "benifits-content-right" : "benifits-content"
      }
    >
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button variant="secondary" children="Learn More" />
      </div>
    </div>
  );
};

const Benifits: React.FC = () => {
  return (
    <>
      <div className="benifits-contanier">
        <div className="mx">
          <div className="benifit">
            <h3>Benifits.</h3>

            <div className="education-content mx">
              <div className="benifits-content-left demoImg">
                <DemoBenifits
                  poision="left"
                  img={Education}
                  title="one is to one & zero fee education"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
              <div className="benifits-content-right demoImg">
                <DemoBenifits
                  poision="right"
                  img={Admission}
                  title="Anytime refundable admission fee"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
              <div className="benifits-content-left demoImg">
                <DemoBenifits
                  poision="left"
                  img={Access}
                  title="Tailor-made platform access"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
              <div className="benifits-content-right demoImg">
                <DemoBenifits
                  poision="right"
                  img={Services}
                  title="Career services"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
              <div className="benifits-content-left demoImg">
                <DemoBenifits
                  poision="left"
                  img={Events}
                  title="Professional networking events"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
              <div className="benifits-content-right demoImg">
                <DemoBenifits
                  poision="right"
                  img={Job}
                  title="job assurance"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifits;
