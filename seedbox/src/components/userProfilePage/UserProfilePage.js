import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { userDataAction } from '../../actions';


const UserProfile = () => {

  const userFromStore = useSelector(state => state.userData)
  const [userData, setUserData] = useState(null)
  const accessToken = useSelector(state => state.accessToken)
  const headers = { headers: { 'Authorization': 'Bearer ' + accessToken } }
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (! userFromStore){
      const fetchUserData = async () => {
        const userData = await fetch('https://api.spotify.com/v1/me', headers).then(response => response.json())
        dispatch(userDataAction(userData))
        setUserData(userData)
      }
      fetchUserData()
    } else {
      setUserData(userFromStore)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {
        userData &&
        <div>
          <h1>{userData.display_name}</h1>
          <img src={userData.images[0].url} alt='none'></img>
        </div>  
        
      }
    </div>
  );
}

export default UserProfile;