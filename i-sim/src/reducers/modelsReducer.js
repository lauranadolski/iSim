const defaultModelState = {
  allModels: [],
  loggedInUserModels: []
};

function modelsReducer(state = defaultModelState, action) {

  switch (action.type) {
    case 'ADD_NEW_MODEL':
      return [ ...state, action.newModel ];
    case 'GRAB_ALL_MODELS_FROM_API':
      return { ...state, allModels: action.allModelsFromAPI };
    case 'GRAB_USER_MODELS_FROM_API':
      return { ...state, allModels: action.allModelsFromAPI };
    default:
      return state;
  }
}

export default modelsReducer;
