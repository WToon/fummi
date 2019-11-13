import React, { Component } from 'react';

import styled from 'styled-components'

const SliderHeader = styled.p`
padding: 15px;
  font-size: 20px;
  font-family:'Courier New', Courier, monospace;

`


const sliderThumbStyles = (props) => (`
    border: 4px solid #12A910;
    height: 14px;
    width: 14px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
    box-shadow:  -2px 1px 8px #000000, calc(-100vw - 7px) 0 0 100vw #12A910;

`);

const Styles = styled.div`


.slider{
  flex :6;
  -webkit-appearance:none;
  height: 5px;
  outline: none;
  margin-bottem: 15px;
  width: 20%;

  &::-webkit-slider-runnable-track {
    background: white;
    overflow: hidden;
    border-radius: 25px;
    height: auto;
    box-shadow: 2px 2px 10px black;
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