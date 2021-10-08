import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Form from "./Form";
import { Button } from "../shared";

export const Container = styled.div`
  background: #eefcff;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;
export const FormBackground = styled.div`
  background-image: url(${({ theme }) => theme.signin.bgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(35px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  padding: 0 3rem;
  min-width: 400px;
  height: 100%;
  z-index: 1;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 30px;
  } ;
`;
export const LogoContainer = styled.div`
  color: #ff8d8d;
  text-align: center;
  font-size: 22px;
  padding-bottom: 30px;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  h3 {
    color: grey;
    margin-bottom: 2rem;
  }
`;
export const FormButton = styled(Button)`
  margin: 1rem 0;
`;

export const Terms = styled.div`
  padding: 0 1rem 0.3rem;
  text-align: center;
  color: #000;
  font-weight: 300;
  font-size: 10px;
`;
