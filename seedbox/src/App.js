// Import dependencies
import React, {Component} from 'react';
import querystring from 'querystring';
import 'reset-css/reset.css'
import './App.css';
import {defaultStyle} from './constants'
import {
  HoursCounter,
  Filter,
  Playlist,
  PlaylistCounter,
  LoginScreen,
  Loading} from './components'

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
    this.setState({accessToken})
    
    if (! accessToken)
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
            return playlists
        })
        return playlistPromise 
      })
      .then(playlists => {
        this.setState({playlists: playlists.map(item => (
          { name: item.name,
            songs: item.trackDatas.slice(0,3),
            imageUrl: item.images[0].url}))})
        }
      )
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
        this.state.accessToken ?
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

              {playlistsToRender.map(playlist => <Playlist key={playlist.name} playlist={playlist} />)}
            </div> 
          :
            <Loading/>
        :
          <LoginScreen/>
      }
      </div>
    );
  }
}

export default App;