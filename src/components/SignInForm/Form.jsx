import React from "react";
import { Logo, Input } from "../shared";
import {
  FormContainer,
  FormContent,
  StyledForm,
  Terms,
  Container,
  LogoContainer,
  FormButton,
  FormBackground,
} from "./Form.styled";

const Form = () => {
  return (
    <Container>
      <FormBackground>
        <FormContainer>
          <FormContent>
            <LogoContainer>
              <Logo dark />
            </LogoContainer>
            <StyledForm>
              <h3>Sign In</h3>
              <Input placeholder="Email or UserName" />
              <Input placeholder="Password" type="password" />
              <FormButton>Sign In</FormButton>

              <Terms>
                By signing up, I agree to the Privacy Policy <br /> and Terms of
                Service
              </Terms>
              <h4>
                Already have an account? <span>Sign In</span>
              </h4>
            </StyledForm>
          </FormContent>
        </FormContainer>
      </FormBackground>
    </Container>
  );
};

export default Form;
