import React from 'react';
import {Button} from '.'

import {defaultStyle} from '../constants'

const LoginPage = () => 
      <div style={defaultStyle} >
        <Button
          onClick={ () => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://fummi-backend.herokuapp.com/login'}}
        >Login to spotify
        </Button>
      </div>

export default LoginPage;