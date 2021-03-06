import styled from "styled-components";

export const StyledInfoSection = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  } ;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and(max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 65px;
  }
`;

//${({ lightTopLine }) => (lightTopLine ? "#01bf71" : "#4B59F7")};
export const TopLine = styled.div`
  color: #01bf71;
  font-size: 17px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

// export const StyledInfoSection = styled.div`
//   color: #fff;
//   /* padding: 160px 0; */
//   background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
//   @media screen and (max-width: 768px) {
//     padding: 100px 0;
//   }
// `;
// /* this is for using css grid  */
// export const InforWrapper = styled.div`
//   display: grid;
//   height: 860px;
//   width: 100%;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 24px;
//   justify-content: center;
// `;
// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};
//   @media screen and (max-width: 780px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
//   } ;
// `;
// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: "col1";
// `;
// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: "col1";
// `;

// export const InfoColumn = styled.div``;
// export const TextWrapper = styled.div`
//   max-width: 540px;
//   padding-top: 0;
//   padding-bottom: 60px;
// `;
// export const TopLine = styled.div`
//   color: #01bf71;
//   font-size: 16px;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   margin-bottom: 16px;
// `;
// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 48px;
//   line-height: 1.1;
//   font: 600;
//   color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

// export const Subtitle = styled.p`
//   max-width: 440px;
//   margin-bottom: 35px;
//   font-size: 18px;
//   line-height: 24px;
//   color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
// `;
// export const ImgWrapper = styled.div`
//   max-width: 555px;
//   height: 100%;
// `;
// export const Img = styled.img`
//   width: 100%;
//   margin: 0 0 10px 0;
//   padding-right: 0;
// `;
