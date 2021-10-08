import React, { useState } from "react";
import { Footer, Header, HeroSection, InfoSection } from "../../components";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../components/InfoSection/Data";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
