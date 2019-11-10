import React, { Component } from 'react';
import {Button} from '.'


class LoginScreen extends Component {
  render() { 
    return (
      <div >
        <Button
          onClick={ () => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://fummi-backend.herokuapp.com/login'}}
        >Login to spotify
        </Button>
      </div>
    )
  }
}
 
export default LoginScreen;