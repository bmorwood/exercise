import { combineReducers } from 'redux'
import { AUTH, TYPINGPASSWORD, TYPINGUSERNAME } from '../actions'

const initialState = {
  auth: false,
  username: '',
  loginfields: {
    username: '',
    password: ''
  }
}

function login (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      console.log('logging in')
      return Object.assign(
        state,
        { auth: true },
        {username: state.loginfields.username}
      )
    case TYPINGPASSWORD:
      console.log('editing password...(' + action.password + ')')
      return Object.assign(state, { loginfields: { password: action.password }})
    case TYPINGUSERNAME:
      console.log('editing username...(' + action.username + ')')
      return Object.assign(state, { loginfields: { password: action.username }})
    default:
      return state
  }
}

const exerciseApp = combineReducers({
  login
})

export default exerciseApp
