const defaultUserState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
};

function userReducer(state = defaultUserState, action) {
  switch (action.type) {
      case 'SET_CURRENT_USER':
        //action.payload {username: 'Chandler Bing', bio: 'my user bio', avatar: 'some image url'}
        console.log("HAIII MOM", action, action.payload)
        return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
      case 'AUTHENTICATING_USER':
        return { ...state, authenticatingUser: true }
      case 'AUTHENTICATED_USER':
        return { ...state, authenticatingUser: false }
      case 'FAILED_LOGIN':
        return {
          ...state,
          failedLogin: true,
          error: action.payload,
          authenticatingUser: false
        }
      default:
        return state
    }
}

export default userReducer;
