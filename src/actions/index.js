export const TYPINGPASSWORD = 'TYPINGPASSWORD'
export const TYPINGUSERNAME = 'TYPINGUSERNAME'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(username) {
  return { type: LOGIN, username }
}

export function logout() {
  return { type: LOGOUT }
}

export function typingUsername(username) {
  return { type: TYPINGUSERNAME, username }
}

export function typingPassword(password) {
  return { type: TYPINGPASSWORD, password }
}
