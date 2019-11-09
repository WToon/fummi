import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {defaultStyle} from '../constants'

export default class Filter extends Component {
  
  componentDidMount() {
      this.inputField.focus()
  }

  render() {
    const {onTextChange} = this.props
    return (
      <div style={{...defaultStyle, marginBottom:'10px'}}>
        <input 
          type="text" 
          onKeyUp={e => onTextChange(e.target.value)}
          ref = {el => this.inputField = el}
        />
      </div>
    )
  }
}

Filter.propTypes = {
  onTextChange: PropTypes.func.isRequired,
}