import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AccountCreationBox extends React.Component {
  state = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    password: "Password"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    this.postNewUser();
  }

  postNewUser = () => {

    let newUserBody = {
      user: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.email_address,
        password: this.state.password
      }
    }

    const postConfig = {
      method:'POST',
      body: JSON.stringify(newUserBody),
      headers: {
        "Content-type": 'application/json',
      }
    }


    fetch('http://localhost:3000/api/v1/users', postConfig)
  }


  render() {
    return (
      <div>
        <form label='Create Account' onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
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

            <button>Register</button>

        </form>
      </div>

    )
  }
}

export default AccountCreationBox;
