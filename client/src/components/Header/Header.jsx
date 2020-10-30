import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import FilmLogo from "../../images/film.svg";

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #777;
`

const HeaderNav = styled.nav`
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-inline-start: unset;
  
  .nav-links {
    color: antiquewhite;
    margin-left: 20px;
    list-style: none;
    text-decoration: none;
  }
  
  .logo {
    width: 100px;
  }
`

export const Header = () => (
    <StyledHeader>
        <HeaderNav>
            <NavList>
                <img className="logo" src={FilmLogo} alt="Film Logo"/>
                <NavLink className="nav-links" to="/">Home</NavLink>
                <NavLink className="nav-links" to="#">About us</NavLink>
                <NavLink className="nav-links" to="/registration">Sign in</NavLink>
                <NavLink className="nav-links" to="/login">Log in</NavLink>
            </NavList>
        </HeaderNav>
    </StyledHeader>
);
