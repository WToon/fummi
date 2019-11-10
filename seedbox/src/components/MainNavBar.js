import React from 'react';
import { Link } from 'react-router-dom'
import { defaultStyle } from '../constants'
import styled from 'styled-components'

const Navbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    float: left;
    margin: 25px;
  }
`

const MainNavBar = () =>
  <div style={defaultStyle}>
    <Navbar>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">My profile</Link></li>
        <li><Link to="/create">Create playlist</Link></li>
    </Navbar>
  </div>

export default MainNavBar;