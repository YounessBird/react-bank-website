import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarContainer.styled";
import { Button } from "../shared";

const Sidebar = ({ click }) => {
  return (
    <SidebarContainer click={click}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SidebarMenu>
        <SideBtnWrap>
          <Button to="/signin">Sign In</Button>
        </SideBtnWrap>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
