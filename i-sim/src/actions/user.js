export const loginUser = (email_address, password) => {
  return /*FUNCTION*/ (dispatch) => {
    console.log("i yam in log-in user function dis dispatch", dispatch)
    dispatch(authenticatingUser())
    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`)
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email_address: email_address,
          password: password
        }
      })
    })
      .then(response => {
        console.log("hello my response", response)
        if (response.ok) {
          // console.log("again i am here", response.json())
          return response.json()
        } else {
          throw response
        }
      })
      // {user: {}, jwt: 'aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc'}
      .then(({ user, jwt }) => {

        ////////////HERE IS MY PROBLEM (somewhere.. my user isn't getting set in my state)////////////
        console.log("hello my jwt lala", user, jwt)
        localStorage.setItem('jwt', jwt)
        dispatch(setCurrentUser(user))
      })
      .catch(r => r.json().then(e => dispatch(failedLogin(e.message))))
      // .then((jsonResponse) => {
      //   localStorage.setItem('jwt', jsonResponse.jwt)
      //   dispatch(setCurrentUser(jsonResponse.user))
      // })
  }
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser())
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

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })

module.export = {
  loginUser,
  fetchCurrentUser,
  setCurrentUser,
  failedLogin,
  authenticatingUser,
}
