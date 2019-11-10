const accessToken = token => {
  return {
    type: 'AUTHENTICATE',
    payload: token
  }
 }

export default accessToken;