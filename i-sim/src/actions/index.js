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

export const toggleEditingModelBoolean = thingie => ({
  type: 'TOGGLE_EDITING_MODEL_BOOLEAN',
  payload: thingie
})

export const selectModelToEdit = targetModel => ({
  type: 'SELECT_MODEL_TO_EDIT',
  payload: targetModel
})
