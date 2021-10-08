import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled(LinkR)`
  justify-content: flex-start;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-weight: bold;
  margin-left: 24px;
`;
