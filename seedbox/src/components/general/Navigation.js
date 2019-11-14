import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import home from '../../images/home.png'
import play from '../../images/play.png'
import profile from '../../images/profile.png'
import e from '../../images/extra.png'

const StyledLink = (props) => (`

font-family: sans-serif;
  color: #B3B3B3; 
  font-family: "Console", Console, monospace;
  justify-content: space-around;
  font-size: 25px;
  text-decoration: none;
  padding: 10px;
  margin-left: 10px;
  
  :hover {
    color: whitesmoke;
  }
  
  `);


  const StyledLinkLogo = styled(Link)`

  :before {
    content: url("https://cdn0.iconfinder.com/data/icons/social-network-24/512/Spotify-128.png");
  }
`;

const StyledLinkHome = styled(Link)`
${props => StyledLink(props)}

  :before {
    content: url(${home});
  }


`;


const StyledLinkAbout = styled(Link)`
${props => StyledLink(props)}

  :before {
    content: url(${e});
  }

`;

const StyledLinkProfile = styled(Link)`
${props => StyledLink(props)}

  :before {
    content: url(${profile});
  }
$
`;

const StyledLinkPlaylist = styled(Link)`
  ${props => StyledLink(props)}
  :before {
    content: url(${play});
  }
`;


const StyledLinkLayout = styled(Link)`
  ${props => StyledLink(props)}
  :before {
    content:url(${e});
  }
`;


const StyledUl = styled.ul`

  flex-direction: column
  display: flex;
  background-color: #212121; 
  font-family: "Console", Console, monospace;
  justify-content: space-around;
  font-size: 30px;
  list-style: none;
  border: 3px solid #73AD21;
  
`

const MainNavBar = () =>
  <StyledUl>
    <StyledLinkLogo to="/"        > </StyledLinkLogo>
    <StyledLinkHome to="/"        > Home</StyledLinkHome>
    <StyledLinkAbout to="/about"   > About</StyledLinkAbout>
    <StyledLinkProfile to="/profile" > My profile</StyledLinkProfile>
    <StyledLinkPlaylist to="/create"  > Create playlist</StyledLinkPlaylist>
    <StyledLinkLayout to="/layout"  > layout</StyledLinkLayout>

  </StyledUl>

export default MainNavBar;