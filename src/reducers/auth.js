import { LOGIN, LOGOUT } from '../actions'

const initialState = {
  isLoggedIn: false,
  username: ''
}

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.username
      }
    case LOGOUT:
    return {
      ...state,
      isLoggedIn: false
    }
    default:
      return state
  }
}

export default authReducer
