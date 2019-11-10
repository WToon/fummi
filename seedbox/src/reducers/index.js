import accessToken from './accessToken'
import userData from './userData'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  accessToken,
  userData
})

export default rootReducer;