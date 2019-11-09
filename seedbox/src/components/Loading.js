import React from 'react'
import ReactLoading from "react-loading";
import PropTypes from 'prop-types'
import {defaultStyle, green} from '../constants'

const Loading = ({type, color, text, width, height}) => 
  <div style={{textAlign: 'center', padding: '20px', margin: 'auto'}}>
    <div style={{...defaultStyle, display: 'inline-block'}}>
      <ReactLoading 
        type={type} 
        color={color}
        width={width}
        height={height}
      />
      <h1>{text}</h1>
    </div>
  </div>

Loading.defaultProps = {
  type: 'spinningBubbles',
  color: green,
  text: '',
  width: 200,
  height: 30
}

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Loading