const defaultUserState = {
  users: [],
};

function userReducer(state = defaultUserState, action) {
  return state;

  // console.log('%c userReducer', 'color:blue', state, action);
  //
  // switch(action.type) {
  //   case ADD_USER:
  //     return { ...state, users: [...state.users, action.payload] };
  //   case RESET:
  //     return initialUserState;
  //   default:
  //     return state;
  // }
}

export default userReducer;
