import { combineReducers } from 'redux'
import authReducer from './auth'
import loginReducer from './login'

const allReducers = combineReducers({
  auth: authReducer,
  login: loginReducer
})

export default allReducers
