import React from "react";
import { Container, StyledInput } from "./Input.styled";
const Input = ({ placeholder, type }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        type={type ? type : "text"}
        required
      />
    </Container>
  );
};

export default Input;
