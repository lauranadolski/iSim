import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) { //i have a token and i'm logged in
        return <WrappedComponent />
      }
      // else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
      //   return <Loader active inline="centered" />
      // }
      else {
        return <Redirect to="/" />
      }
    }
  }

  return connect(
    mapStateToProps,
    actions
  )(AuthorizedComponent)
}

const mapStateToProps = ({ user: { loggedIn, authenticatingUser } }) => ({
  loggedIn,
  authenticatingUser
})

export default withAuth
