import React from "react";
import { Footer, Hero } from "../../components";
import Admission from "../components/Admission";
import Problems from "../components/Problems";
import Benifits from "../components/Benifits";
import Recongnition from "../components/Recognition";
import Career from "../components/Career";
import Featured from "../components/Featured";
import Events from "../components/Events";
import Stories from "../components/Stories";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Admission />
      <Problems />
      <Benifits />
      <Recongnition />
      <Featured />
      <Career />
      <Events />
      <Stories />
      <Footer />
    </div>
  );
};

export default Home;
