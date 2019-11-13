import React, { Component } from 'react';

import styled from 'styled-components'

const SliderHeader = styled.p`
padding: 15px;
  font-size: 20px;
  font-family:'Courier New', Courier, monospace;

`


const sliderThumbStyles = (props) => (`
  background-color: black;
  width: 25px;
  height: 25px;
  background : ${props.color};
  cursor : pointer;
  outline : 5px solid black;
  opacity: ${props.opacity}
  -webkit-transition: .2s;
  transistion: opacity .2s;
`);



const Styles = styled.div`
display: flex;
color: black;
margin-bottem: 15px;
width: 20%;

.slider{
  flex :6;
  -webkit-appearance:none;
  height: 15px;
  background: #efefef;
  outline: none;

  &::-webkit-slider-thumb{
    -webkit-appearance:none;
    appearance:none;
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