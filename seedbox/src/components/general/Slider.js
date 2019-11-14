import React, { Component } from 'react';

import styled from 'styled-components'

const SliderHeader = styled.p`
display: flex;
flex-direction: row;
padding: 15px;
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  color: whitesmoke;

`


const Slidecontainer = styled.div`
    margin-bottom: 10px;
    width: 220px;
`

const SliderInput = styled.input`
-webkit-appearance: none;  /* Override default CSS styles */
appearance: none;
width: 200px;
height: 15px; /* Specified height */
/*background: rgba(53, 53, 53, 1); !* Grey background *!*/
background: linear-gradient(90deg, #57ab68 50%, rgba(53, 53, 53, 1) 50%);
outline: none; /* Remove outline */
opacity: 1; /* Set transparency to 0.7(for mouse-over effects on hover) */
-webkit-transition: .2s; /* 0.2 seconds transition on hover */
transition: opacity .2s;

border-style: solid;
border-radius: 25px;
border-color: rgb(179, 178, 177);
border-width: 1px;

&::hover {
  opacity: 1; /* Fully shown on mouse-over */
}

&::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 26px; /* Slider handle height */
  background: white;
  cursor: pointer; /* Cursor on hover */
  border-radius: 30px;
  margin-top: 1px;
  /*box-shadow: 2px 2px 1px black;*/
  border: solid;
  border-color: #1A1414;
  border-width: 1px;

}

&::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #b07ac3fc; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

&::-webkit-slider-thumb:hover {
  background: #b07ac3fc; /* Green background */
}
`


class Slider extends Component {
  state = { value: 50 }

  

  render() {
    const pixelAdjustment = -0.25* this.state.value + 12.5;
    const percentageAdjustment = pixelAdjustment / 5.76;
    const pixelValue = parseInt(this.state.value) + percentageAdjustment;
    const divStyle = {
      background:'linear-gradient(90deg, rgba(156, 240, 225) ' + pixelValue + '%, rgba(53, 53, 53, 1) ' + pixelValue + '%)'
    };
    return (
      <>
        <Slidecontainer >
        <SliderHeader className='slider-header' >{this.props.name} {this.state.value} </SliderHeader>
        <SliderInput
        style={divStyle}
          name={this.props.name}
          className='slider' type='range' min={0} max={100}
          onChange={e => this.setState({ value: e.target.value })}
          onMouseUp={e => this.props.handleOnMouseUp(e)}
        />
        </Slidecontainer>
      </>
    );
  }
}

export default Slider;