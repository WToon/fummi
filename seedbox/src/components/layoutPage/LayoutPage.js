import React, { Component } from 'react';
import styled from 'styled-components'






const Parent = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Div1 = styled.div`
  background-color: blue;
  width: 10%;
  height: 100%;
  float:left;
`

const Div2 = styled.div`
  background-color: orange;
  width: 90%;
  height: 100%;
  overflow: hidden;
`

class LayoutPage extends Component {
  render() {
    return (
      <Parent>
        <Div1></Div1>
        <Div2></Div2>
      </Parent>
    );
  }
}

export default LayoutPage;