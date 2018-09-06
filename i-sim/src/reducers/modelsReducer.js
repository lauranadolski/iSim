const defaultModelState = [
  { name: "My first model" },
  { name: "My second model" },
  { name: "My third model" },
  { name: "Just another model" }
];

function modelsReducer(state = defaultModelState, action) {

  switch (action.type) {
    case 'ADD_NEW_MODEL':
      return [ ...state, action.newModel ];
    default:
      return state;
  }
}

export default modelsReducer;
