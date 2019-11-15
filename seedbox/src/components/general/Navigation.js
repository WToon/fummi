import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import home from '../../images/home.png'
import play from '../../images/play.png'
import profile from '../../images/profile.png'
import e from '../../images/extra.png'

/*import logo from "../../images/logo.png"*/



const StyledLink = (props) => (`

font-family: sans-serif;
  color: #B3B3B3; 
  font-family: "Console", Console, monospace;
  font-size: 25px;
  text-decoration: none;
  margin-left: 10px;
  margin-top:20px;

  :hover {
    color: #1DB854;
  }
  
  `);

/**

:after {
    content: "";
    background-image:url(${logo}) ;
    background-size: 100% 100%;
    display: inline-block;
  
    height: 60px;
    width:60px;
  
  }
 **/
  const StyledLinkLogo = styled(Link)`

  display: block;
  margin-left: auto;
  margin-right: auto;
  :before {
    content: url(https://cdn0.iconfinder.com/data/icons/social-network-24/512/Spotify-128.png ) ;
  
`;




const StyledLinkOpen = styled(Link)`
${props => StyledLink(props)}
    font-size:30px;
    padding:20px;
    cursor:pointer;
`;

const StyledLinkClose = styled(Link)`
${props => StyledLink(props)}
    font-size:30px;
    cursor:pointer;
    position: absolute;
    top: 0;
    right: 25px;
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


const StyledDiv = styled.div`
  height: 100%;
  width: 15%;
`

const StyledLinkLogout = styled(Link)`
${props => StyledLink(props)}

  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 30px;
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  myClick = () => {
    this.setState({
      clicked: true
    });
  };

  render() {

    
const StyledUl = styled.ul`
height:100%;
flex-direction: column
display: flex;
background-color: #212121; 
font-family: "Console", Console, monospace;
font-size: 30px;

${  this.state.clicked ? 'border: 3px solid transparent;-moz-border-image: -moz-linear-gradient(top, #212121 0%, #1DB854 100%);-webkit-border-image: -webkit-linear-gradient(top, #212121 0%, #1DB854 100%);border-image: linear-gradient(to right, #212121 0%, #1DB854 100%);border-image-slice: 1;' : ''};
height: 100%;
width: ${  this.state.clicked ? '15%' : '0%'};
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
transition-duration: 1s
`
    return (

      
    <StyledDiv>
  <StyledLinkOpen 
     clicked={this.state.clicked}
     onClick={this.myClick}> &#9776;</StyledLinkOpen>

  <StyledUl >
    <StyledLinkClose onClick={() => this.setState({ clicked: false })} > &times;</StyledLinkClose>
    <StyledLinkLogo to="/"        > </StyledLinkLogo>
    <StyledLinkHome to="/"        > Home</StyledLinkHome>
    <StyledLinkAbout to="/about"   > About</StyledLinkAbout>
    <StyledLinkProfile to="/profile" > My profile</StyledLinkProfile>
    <StyledLinkPlaylist to="/create"  > Create playlist</StyledLinkPlaylist>
    <StyledLinkLayout to="/layout"  > layout</StyledLinkLayout>
    <StyledLinkLogout to=""  > Logout</StyledLinkLogout>

  </StyledUl>
  </StyledDiv>
  );
  }
}
export default Navigation;