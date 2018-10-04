const defaultModelState = {
  allModels: [],
  loggedInUserModels: [],
  selectedModelDetailView: 0,
  editingModel: false,
  targetEditModel: 0,
};

function modelsReducer(state = defaultModelState, action) {

  switch (action.type) {
    case 'ADD_NEW_MODEL':
      return [ ...state, action.payload ];
    case 'GRAB_ALL_MODELS_FROM_API':
      return { ...state, allModels: action.payload };
    case 'GRAB_USER_MODELS_FROM_API':
      return { ...state, loggedInUserModels: action.payload };
    case 'SELECT_DETAIL_MODEL_VIEW':
      return { ...state, selectedModelDetailView: action.payload };
    case 'TOGGLE_EDITING_MODEL_BOOLEAN':
      return { ...state, selectedModelDetailView: !state.editingModel };
    case 'SELECT_MODEL_TO_EDIT':
      return { ...state, targetEditModel: action.payload };
    default:
      return state;
  }
}

export default modelsReducer;
