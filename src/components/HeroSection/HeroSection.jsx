import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./Hero.styled";
import { Button } from "../shared";
import video from "../../assets/video.mp4";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towadrs
          your next payment.
        </HeroP>
        <Button
          to="about"
          type="scroll"
          spy={true}
          smooth={true}
          duration={500}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary
          dark
        >
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
