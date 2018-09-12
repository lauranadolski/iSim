import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'

class LoginAndAccountCreationButtonBox extends React.Component {

  componentDidMount = () => {
    console.log("I'm in the login/account creation component. Here's my logged-in state status:", this.props.loggedIn)
  }


  state = {
    email: "Email Address",
    password: "Password"
  }

  forgotPassword = () => {
    alert(`¯\_(ツ)_/¯`);
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
      password: '' })
  }

  render() {
    return (
      this.props.loggedIn ? ( <Redirect to="/home" /> ) : (

      <div className="Login-account-creation-box">
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
          <button className="Account-creation-log-in-button">Log In</button>
           <button className="Account-creation-log-in-button" onClick={this.forgotPassword}>Forgot Password?</button>
          <br />
          <br />
          <hr id="Little-line" />
          <Link to="/create-account">
            <button className="Account-creation-log-in-button" id="Create-account-button">Create Account</button>
          </Link>
        </form>
      </div>
    )
)
  }
}


const mapStateToProps = ({ user: { authenticatingUser, failedLogin, error, user, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  user,
  loggedIn
})

const mapDispatchToProps = (dispatch) => ({ loginUser: bindActionCreators(loginUser, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginAndAccountCreationButtonBox))
