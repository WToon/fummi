import React, { Component } from 'react';

import styled from 'styled-components'

const SliderHeader = styled.p`
padding: 15px;
  font-size: 20px;
  font-family:'Courier New', Courier, monospace;

`


const sliderThumbStyles = (props) => (`

    border: 4px solid white;
    height: 14px;
    width: 14px;
    border-radius: 100%;
    background: white;
    cursor: pointer;
    box-shadow:  -2px 1px 8px #000000, calc(-100vw - 7px) 0 0 100vw white;

`);

const Styles = styled.div`

 
.slider{
  flex :6;
  -webkit-appearance:none;
  height: 5px;
  outline: none;
  margin-bottem: 15px;
  width: 250px;

  &::-webkit-slider-runnable-track {
    background: black;
    overflow: hidden;
    border-radius: 25px;
    height: auto;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    
    ${props => sliderThumbStyles(props)}

  }
  &::-moz-range-thumb{
    ${props => sliderThumbStyles(props)}
  }
}
`

class Slider extends Component {
  state = { value: 50 }

  render() {
    return (
      <>
        <SliderHeader className='slider-header' >{this.props.name} {this.state.value} </SliderHeader>
        <Styles opacity={this.state.value > 20 ? (this.state.value/100): .2} color = {this.props.color}>
        <input
          name={this.props.name}
          className='slider' type='range' min={0} max={100}
          onChange={e => this.setState({ value: e.target.value })}
          onMouseUp={e => this.props.handleOnMouseUp(e)}
        />
        </Styles>
      </>
    );
  }
}

export default Slider;