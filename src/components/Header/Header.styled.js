import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../shared/Container.styled";
import { Button } from "../shared";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 999;
  top: 0;
  position: sticky;
  margin-top: -120px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all text-emphasis-style;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  color: #fff;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: ${({ click }) => (click ? "0" : "-1000%")};
    position: absolute;
    left: 0;
    opacity: ${({ click }) => (click ? "100%" : "0")};
    transition: 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.header};
    padding: 150px 0;
    & > * + * {
      margin-top: -10px;
    }
  }
`;
export const NavItem = styled.li`
  height: 80px;
  /* border-bottom: 2px solid transparent; */

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  outline: none;
  &.active {
    border-bottom: 3px solid #01bf71;
    outline: none !important;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    cursor: default;
    width: 100%;
    display: table;
    &:hover {
      color: #01bf71;
      transition: 0.2s ease-in-out;
    }
    &.active {
      border-bottom: none;
    }
  } ;
`;
export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    justify-self: flex-end;
    display: block;
    font-size: 1.8rem;
    cursor: default;
    color: #fff;
    z-index: 9999;
    outline: none !important;
    padding-right: 20px;
  }
`;
export const MobileButton = styled(Button)`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }
`;
export const NavButton = styled(Button)`
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
