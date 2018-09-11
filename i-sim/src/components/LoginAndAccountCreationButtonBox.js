import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'

class LoginAndAccountCreationButtonBox extends React.Component {
  state = {
    email: "Email Address",
    password: "Password"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: '' }, console.log("hello", this.state))
  }

  render() {
    return (

      this.props.loggedIn ? (
      <Redirect to="/home" />
    ) : (


      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button>Log In</button>
           <button>Forgot Password?</button>
          <br />
          <Link to="/create-account">
            <button>Create Account</button>
          </Link>
        </form>
      </div>
    )
)
  }
}
//
// export default LoginAndAccountCreationButtonBox;


const mapStateToProps = ({ user: { authenticatingUser, failedLogin, error, user, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  user,
  loggedIn
})

const mapDispatchToProps = (dispatch) => ({ loginUser: bindActionCreators(loginUser, dispatch) })

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginAndAccountCreationButtonBox)
)
