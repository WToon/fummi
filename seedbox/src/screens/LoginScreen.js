import React, { Component } from 'react';
import 'reset-css/reset.css'
import '../cssFiles/Style.css';
import logo from "../images/logo.png"
import querystring from 'querystring';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      filterString: ''
    }
  }

  render() {
    return (
      <div className="Login">
        {
          this.state.user ?
             this.props.history.push('/playListScreen')
          : 
            <div>
              <img id="logo" src={logo} alt="fireSpot" />
              <h1>SeedBox</h1>
              <button onClick={this.onSubmit}>Connect with spotify</button>
            </div>}
      </div>
    );
  }

  onSubmit = () => {
    window.location = window.location.href.includes('localhost')
      ? 'http://localhost:8888/login'
      : 'https://fummi-backend.herokuapp.com/login'
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

}
