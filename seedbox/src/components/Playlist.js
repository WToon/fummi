import React, {Component} from 'react'
import {defaultStyle} from '../constants'


export default class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:'25%', display: 'inline-block', marginInline:'15px'}}>
        <h3 style={{marginTop:'15px'}}>{this.props.playlist.name}</h3>
        <img src={this.props.playlist.imageUrl} style={{height:'60px', marginBottom:'5px', marginTop:'5px'}} alt='true' />
        <ul style={{listStyleType:'circle', marginTop:'10px'}}>
          {this.props.playlist.songs.map(song => <li key={song.name} style={{paddingTop:'5px'}}>{song.name}</li>)}
        </ul>
      </div>
    )
  }
}