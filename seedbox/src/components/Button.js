import React from 'react';
import PropTypes from 'prop-types'
import {defaultStyle} from '../constants';


const Button = ({children, onClick, style}) => 
  <button 
    style={style? style : defaultStyle} 
    onClick={e => onClick(e)}>
    {children ? children : "Default button text"}
  </button>

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button;