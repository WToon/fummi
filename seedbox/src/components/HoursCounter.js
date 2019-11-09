import React, {Component} from 'react'
import {defaultStyle} from '../constants'


export default class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, playlist) => {
      return songs.concat(playlist.songs)
    } , [])

    let totalDuration = allSongs.reduce((sum, song) => {
      return sum + song.duration
    }, 0)

    let hourCounterStyle = {...defaultStyle,
      width: '40%',
      display: 'inline-block',
      marginBottom:'10px',
      color: '#1db954'
    }

    return (
      <div style={hourCounterStyle}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
      </div>
    )
  }
}