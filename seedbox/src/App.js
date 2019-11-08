
import React, { Component } from 'react';
import Router from '../src/config/Router';

class App extends Component {

  render() {
    return (
     <Router/>
    );
  }
}

export default App;


/*import React, {Component} from 'react';
import querystring from 'querystring';
import 'reset-css/reset.css'
import './App.css';

let defaultStyle = {
  color: '#b3b3b3',
  'font-family': '"Console", Console, monospace'
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block', marginBottom:'10px'}}>
        <h2 style={defaultStyle}>
        {this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component {
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

class Filter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, marginBottom:'10px'}}>
        <input type="text" onKeyUp={e => 
          this.props.onTextChange(e.target.value)}/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:'25%', display: 'inline-block', marginInline:'15px'}}>
        <h3 style={{marginTop:'15px'}}>{this.props.playlist.name}</h3>
        <img src={this.props.playlist.imageUrl} style={{height:'60px', marginBottom:'5px', marginTop:'5px'}} alt='true' />
        <ul style={{'list-style-type':'circle', marginTop:'10px'}}>
          {this.props.playlist.songs.map(song => <li style={{paddingTop:'5px'}}>{song.name}</li>)}
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: ''
    }
  }

  componentDidMount() {
    let parsed = querystring.parse(window.location.search.substring(1))
    let accessToken = parsed.access_token
    let headers = {headers: {'Authorization': 'Bearer '+ accessToken}}

    if (!accessToken)
      return

    fetch('https://api.spotify.com/v1/me', headers)
      .then(response => response.json())
      .then(userData => this.setState({user: {name: userData.display_name}}))

    fetch('https://api.spotify.com/v1/me/playlists', headers)
      .then(response => response.json())
      .then(playlistData => {
        let playlists = playlistData.items
        let trackDataPromises = playlists.map(playlist => {
          let responsePromise = fetch(playlist.tracks.href, headers)
          let trackDataPromise = responsePromise.then(response => response.json())
          return trackDataPromise
        })
        let allTracksDataPromises = Promise.all(trackDataPromises)
        let playlistPromise = allTracksDataPromises.then(trackDatas => {
            trackDatas.forEach((trackData, i) => {
              playlists[i].trackDatas = trackData.items
                .map(item => item.track)
                .map(trackData => ({
                  name: trackData.name,
                  duration: trackData.duration_ms/1000
                }))
            })
            console.log(playlists)
            return playlists
        })
        return playlistPromise 
      })
      .then(playlists => this.setState({playlists: playlists.map(item => (
        {name: item.name,
         songs: item.trackDatas.slice(0,3),
         imageUrl: item.images[0].url}))}))
  }

  render() {
    let playlistsToRender = 
      this.state.playlists
        ? this.state.playlists.filter(playlist => 
          playlist.name.toLowerCase().includes(
            this.state.filterString.toLowerCase()))
        : []
   
    return (
      <div className="App">
      {
        this.state.user ? 
          <div>
            <h1 style={{...defaultStyle,
               marginTop:'20px', 
               fontSize:'54px',
               marginBottom:'20px'}}>
              {this.state.user.name}'s playlists
            </h1>
            <PlaylistCounter  playlists={playlistsToRender}/>
            <HoursCounter     playlists={playlistsToRender}/>
            <Filter onTextChange={text => {this.setState({filterString: text})}}/>

            {playlistsToRender.map(playlist => <Playlist playlist={playlist} />)}
          </div> 
        :
          <button onClick={ () => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://fummi-backend.herokuapp.com/login'
          }}>Connect with spotify</button>
      }
      </div>
    );
  }
}

export default App;
*/