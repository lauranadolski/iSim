import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

  handleLogOut = () => {
    localStorage.clear()
    window.location.reload();
  }

  logOutButton = () => {
    if (this.props.user) {
      return (

        <button onClick={this.handleLogOut}>Log out</button>

      )
    }
  }

  resetDetailViewModel = () => {
    if(this.props.selectDetailModelView) {
      this.props.selectDetailModelView(0)
    }
  }

  resetEditModelView = () => {
    if(this.props.selectModelToEdit) {
      this.props.selectModelToEdit(0)
    }
  }

  clickHelper = () => {
    this.resetDetailViewModel()
    this.resetEditModelView()
  }

  render() {
    return (
      <div>
        <Link to="/home">
        <button onClick={this.clickHelper}>Home</button>
        </Link>
        <Link to="/about">
        <button>About</button>
        </Link>
        {this.logOutButton()}
      </div>
    )
  }
}

export default Header;
