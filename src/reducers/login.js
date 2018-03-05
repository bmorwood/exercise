import { TYPINGPASSWORD, TYPINGUSERNAME } from '../actions'

const initialState = {
  username: '',
  password: ''
}

function loginReducer (state = initialState, action) {
  switch (action.type) {
    case TYPINGPASSWORD:
      return {
        ...state,
        password: action.password
      }
    case TYPINGUSERNAME:
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default loginReducer
