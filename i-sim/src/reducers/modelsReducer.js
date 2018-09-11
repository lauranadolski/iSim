const defaultModelState = {
  allModels: [],
  loggedInUserModels: []
};

function modelsReducer(state = defaultModelState, action) {

  switch (action.type) {
    case 'ADD_NEW_MODEL':
      return [ ...state, action.payload ];
    case 'GRAB_ALL_MODELS_FROM_API':
    console.log("I am grabbing all user models from the API, this my payload:", action)
      return { ...state, allModels: action.payload };
    case 'GRAB_USER_MODELS_FROM_API':
      return { ...state, loggedInUserModels: action.payload };
    default:
      return state;
  }
}

export default modelsReducer;
