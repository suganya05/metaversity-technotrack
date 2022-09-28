import React, { useState } from "react";
import Education from "../../../assets/images/education.png";
import Admission from "../../../assets/images/admission-img.png";
import Access from "../../../assets/images/access-img.png";
import Services from "../../../assets/images/services-img.png";
import Events from "../../../assets/images/events-img.png";
import Job from "../../../assets/images/job-assurance-img.png";
import "../Benifits/Benifits.scss";

const Benifits: React.FC = () => {
  // const [isReadMoreShow, setReadMoreShow] = useState(false);

  // const toggleBtn = () => {
  //   setReadMoreShow((prevState) => !prevState);
  // };
  return (
    <div className="benifits-contanier">
      <div className="mx">
        <h2>Benifits.</h2>

        {/* Zero fee Education */}

        <div className="benifits-content">
          <div>
            <img src={Education} alt="" />
          </div>
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>one is to one & zero fee education</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
        </div>

        {/* Admission fee */}

        <div className="benifits-content">
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>Anytime refundable admission fee</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
          <div>
            <img src={Admission} alt="" />
          </div>
        </div>

        {/* Platform access */}

        <div className="benifits-content">
          <div>
            <img src={Access} alt="" />
          </div>
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>Tailor-made platform access</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
        </div>

        {/* Career services */}

        <div className="benifits-content">
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>Career services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
          <div>
            <img src={Services} alt="" />
          </div>
        </div>

        {/* Events  */}

        <div className="benifits-content">
          <div>
            <img src={Events} alt="" />
          </div>
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>Professional networking events</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
        </div>

        {/* Job Assurance */}

        <div className="benifits-content">
          <div className="education-para">
            <input type="checkbox" id="check" />
            <h2>job assurance</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <label htmlFor="check">Learn More</label>
          </div>
          <div>
            <img src={Job} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
