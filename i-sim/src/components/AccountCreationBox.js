import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AccountCreationBox extends React.Component {
  state = {
    name: "Name",
    email: "Email Address",
    password: "Password"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        Hello, I am account creation box.
        <form label='Create Account' onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
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
          <Link to="/home">
            <button>Register</button>
          </Link>
        </form>
      </div>

    )
  }
}

export default AccountCreationBox;
