import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const StyledLink = styled(Link)`
  display: flex;
  color: #b3b3b3; 
  font-family: "Console", Console, monospace;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
`;

const StyledUl = styled.ul`
  display: flex;
  background-color: #212121; 
  font-family: "Console", Console, monospace;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  list-style: none;
`

const MainNavBar = () =>
  <StyledUl>
    <StyledLink to="/"        >Home</StyledLink>
    <StyledLink to="/about"   >About</StyledLink>
    <StyledLink to="/profile" >My profile</StyledLink>
    <StyledLink to="/create"  >Create playlist</StyledLink>
  </StyledUl>

export default MainNavBar;