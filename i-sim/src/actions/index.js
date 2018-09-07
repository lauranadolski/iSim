// createNewModel() is an Action Creator. As such, it needs to return an action (an object with a type property).

// Actions typically have two values: 1) a type (describes the porpoise of the action), and 2) a payload (clarifies the conditions of the action that's being triggered).

// export function createNewModel(newModel) {
//   // console.log("A model has been selected:", model.newModelTitle)
//   return { type: 'ADD_NEW_MODEL', payload: newModel };
// }

export const createNewModel = newModel => ({
  type: 'ADD_NEW_MODEL',
  newModel
})

export const addAllModels = allModelsFromAPI => ({
  type: 'GRAB_ALL_MODELS_FROM_API',
  allModelsFromAPI
})

export const grabUserModels = userModels => ({
  type: 'GRAB_USER_MODELS_FROM_API',
  payload: userModels
})


///////////////////////////////////////////////////////////////////
export const loginUser = (username, password) => {
  return dispatch => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user: { username, password } })
    })
      .then(response => response.json())
      // {user: {}, jwt: 'aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc'}
      .then(({ user, jwt }) => {
        localStorage.setItem('jwt', jwt)
        dispatch(setCurrentUser(user))
      })
  }
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return dispatch => {
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then(({ user }) => dispatch(setCurrentUser(user)))
  }
}

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
