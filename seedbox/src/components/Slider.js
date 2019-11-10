import React, { Component } from 'react';
import styled from 'styled-components'


const SliderStyle = styled.div`
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    border-radius: 15px;
    outline: none;
    opacity: 0.5;
    -webkit-transition: .2s;
    transition: opacity .2s;
    background-color: ${props => props.sliderColor}
  }
  .slider:hover {
    opacity: 1
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.sliderColor};
    cursor: pointer;
  }
  .slider-header {
    color: white;
    font-family: Console, Monospace;
    flex:1;
    font-size:20px;
    margin: 10px;
  }
`

class Slider extends Component {
  state = { value: 50 }

  render() {
    return (
      <SliderStyle sliderColor={this.props.color}>
        <p className='slider-header'>{this.props.name} {this.state.value} </p>
        <input
          name={this.props.name}
          className='slider' type='range' min={0} max={100}
          onChange={e => this.setState({ value: e.target.value })}
          onMouseUp={e => this.props.handleOnMouseUp(e)}
        />
      </SliderStyle>
    );
  }
}

export default Slider;