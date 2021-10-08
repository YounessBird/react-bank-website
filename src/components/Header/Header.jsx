import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Logo } from "../shared";
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  MobileMenu,
  MobileButton,
  NavButton,
} from "./Header.styled";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const handleClick = () => setClick(!click);
  const changeNav = () =>
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  const toggleHome = () => scroll.scrollToTop();
  useEffect(() => {
    const scrollfunc = window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", scrollfunc);
    };
  }, []);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <Logo to="/" onClick={toggleHome}>
            Dolla
          </Logo>
          <MobileMenu onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileMenu>
          <NavMenu click={click}>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
            <MobileButton to="/SignIn">Try now </MobileButton>
          </NavMenu>
          <NavButton primary to="/SignIn">
            Try now{" "}
          </NavButton>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Header;
