import React from "react";
import "../Problems/Problems.scss";

interface IProblems {
  title: string;
  description: string;
}

const DemoProblems: React.FC<IProblems> = ({ title, description }) => {
  return (
    <div className="content-two">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Problems: React.FC = () => {
  return (
    <>
      <div className="problems-container">
        <div className="mx">
          <div className="problems">
            <h2>Problems</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="demo-container">
            <div className="learning-content-left">
              <DemoProblems
                title="80-20 Learning Model"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="learning-content-center">
              <DemoProblems
                title="Solving Curriculum Gaps"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="learning-content-right">
              <DemoProblems
                title="Life Skill Mandate"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>

            <div className="learning-content-center">
              <DemoProblems
                title="22 in a Garage"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
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
    </>
  );
};

export default Problems;
