import React, { Component } from 'react';
import {defaultStyle} from '../constants'


class LoginScreen extends Component {
  render() { 
    return (
      <div >
        <button style={{...defaultStyle}}
          onClick={ () => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://fummi-backend.herokuapp.com/login'}}
        >Login to spotify
        </button>
      </div>
    )
  }
}
 
export default LoginScreen;