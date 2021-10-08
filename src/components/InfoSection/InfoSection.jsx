import React from "react";
import { Container } from "../shared/Container.styled";
import { Button } from "../shared";
import {
  StyledInfoSection,
  InforWrapper,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Column2,
  Column1,
} from "./InfoSection.styled";
const InfoSection = ({
  id,
  primary,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  start,
  dark,
  darkText,
}) => {
  return (
    <div>
      <StyledInfoSection lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText} lightTextDesc={lightTextDesc}>
                  {description}
                </Subtitle>
                <Button
                  big
                  primary={primary}
                  dark={dark}
                  to="home"
                  type="scroll"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {buttonLabel}
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </StyledInfoSection>
    </div>
  );
};

export default InfoSection;
