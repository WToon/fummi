let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()
let client_id = 'f825b4e0dd7c4b6b90a407a573c0de93'
let client_secret = '4d8431bae5ea404a99d42b6f6c6cba34'


let redirect_uri = 'http://localhost:8888/callback'

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: 'user-read-private user-read-email',
      redirect_uri,
      show_dialog: true
    }))
})

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        client_id + ':' + client_secret
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

let port = 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)