// createNewModel() is an Action Creator. As such, it needs to return an action (an object with a type property).

// Actions typically have two values: 1) a type (describes the porpoise of the action), and 2) a payload (clarifies the conditions of the action that's being triggered).

// export function createNewModel(newModel) {
//   // console.log("A model has been selected:", model.newModelTitle)
//   return { type: 'ADD_NEW_MODEL', payload: newModel };
// }

export const createNewModel = newModel => ({
  type: 'ADD_NEW_MODEL',
  payload: newModel
})

export const addAllModels = allModelsFromAPI => ({
  type: 'GRAB_ALL_MODELS_FROM_API',
  payload: allModelsFromAPI
})

export const grabUserModels = userModels => ({
  type: 'GRAB_USER_MODELS_FROM_API',
  payload: userModels
})

export const selectDetailModelView = modelID => ({
  type: 'SELECT_DETAIL_MODEL_VIEW',
  payload: modelID
})
