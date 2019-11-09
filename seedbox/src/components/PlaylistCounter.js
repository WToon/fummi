import React, {Component} from 'react'
import {defaultStyle} from '../constants'


export default class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block', marginBottom:'10px'}}>
        <h2 style={defaultStyle}>
        {this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}