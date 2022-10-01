import React from "react";
import { Button } from "../../../components";
import "../Problems/Problems.scss";
import CircleOne from "../../../assets/images/circle-1.svg";
import CircleTwo from "../../../assets/images/circle-2.svg";
import CircleThree from "../../../assets/images/circle-3.svg";
import CircleFour from "../../../assets/images/circle-4.svg";
import CircleHeadTwo from "../../../assets/images/circle.png";
import CircleHeadOne from "../../../assets/images/circle-two.png";
import MediaCircleOne from "../../../assets/images/right-side-one.png";
import MediaCircleTwo from "../../../assets/images/right-side-two.png";
import MediaCircleThree from "../../../assets/images/right-side-three.png";
import MediaCircleFour from "../../../assets/images/right-side-four.png";

interface IProblems {
  title: string;
  description: string;
}

const DemoProblems: React.FC<IProblems> = ({ title, description }) => {
  return (
    <div className="circleColorContent">
      <div className="content-two">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button variant="secondary" children="Learn More" />
      </div>
    </div>
  );
};

const Problems: React.FC = () => {
  return (
    <>
      <div className="problems-container">
        <div className="mx">
          <div className="problems-content">
            <div className="problems">
              <div className="head">
                <h2>Problems</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="circle-img">
                <img src={CircleHeadTwo} alt="" />
              </div>
              <div className="circle-head">
                <img src={CircleHeadOne} alt="" />
              </div>
            </div>
            <div className="demo-container">
              <div>
                <div className="learning-content-left">
                  <DemoProblems
                    title="80-20 Learning Model"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                </div>
                <div className="circle-one">
                  <img src={CircleOne} alt="" />
                </div>
                <div className="rightCircle-one">
                  <img src={MediaCircleOne} alt="" />
                </div>
              </div>

              <div>
                <div className="learning-content-center">
                  <DemoProblems
                    title="Solving Curriculum Gaps"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                </div>
                <div className="circle-two">
                  <img src={CircleTwo} alt="" />
                </div>
                <div className="rightCircle-two">
                  <img src={MediaCircleTwo} alt="" />
                </div>
              </div>

              <div>
                <div className="learning-content-right">
                  <DemoProblems
                    title="Life Skill Mandate"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                </div>
                <div className="circle-three">
                  <img src={CircleThree} alt="" />
                </div>
                <div className="rightCircle-three">
                  <img src={MediaCircleThree} alt="" />
                </div>
              </div>

              <div>
                <div className="learning-content-center">
                  <DemoProblems
                    title="22 in a Garage"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                </div>
                <div className="circle-four">
                  <img src={CircleFour} alt="" />
                </div>
                <div className="rightCircle-four">
                  <img src={MediaCircleFour} alt="" />
                </div>
              </div>

              <div className="learning-content-left">
                <DemoProblems
                  title="Native Language Mentoring"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problems;
