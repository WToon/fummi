import React, { Component } from 'react';
import styled from 'styled-components'

import AttributePicker from '../creationPage/AtrributeSelector'

const Parent = styled.div`
  background-color: red;
  margin: 5px;
  display: flex;
  flex-flow: row wrap;
`

const Div1 = styled.div`
  background-color: green;
  margin: 5px;
  width: auto;
  height: auto;
`

const Div2 = styled.div`
  color: red;
  background-color: blue;
  margin: 7px;
  width: 300px;
  height: 70px;
`

const Div3 = styled.div`
  background-color: orange;
  margin: 20px;
  width: 200px;
  height: 7px;
`

class AboutPage extends Component {
  render() {
    return (
      <Parent>
        <Div1>
          <AttributePicker />
        </Div1>
        <Div2></Div2>
        <Div3></Div3>
      </Parent>
    );
  }
}

export default AboutPage;