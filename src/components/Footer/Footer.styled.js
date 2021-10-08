import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 16px;
  width: 160px;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const CopyRight = styled.small`
  margin-top: 1rem;
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  font-size: 24px;
  color: #fff;
`;

// export const BottomFooter = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// export const SocialLogo = styled(LinkR)`
//   color: #fff;
//   justify-self: start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
//   font-weight: bold;
// `;
