import React from 'react';

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

  handleSubmit = () => {
    
  }

  render() {
    return (
      <div>
        Hello, I a login and account creation button box.

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
        </form>
      </div>
    )
  }
}

export default LoginAndAccountCreationButtonBox;
