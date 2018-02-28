export const AUTH = 'AUTH'
export const TYPINGPASSWORD = 'TYPINGPASSWORD'
export const TYPINGUSERNAME = 'TYPINGUSERNAME'

export function authenticateUser() {
  return { type: AUTH }
}

export function typingUsername(username) {
  return { type: TYPINGUSERNAME, username }
}

export function typingPassword(password) {
  return { type: TYPINGPASSWORD, password }
}
