import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

// Clears the JWS token and forces reload of the window upon log-out.
  handleLogOut = () => {
    localStorage.clear()
    window.location.reload();
  }

// Check through props whether the user is logged in. If so, display a button component.

  logOutButton = () => {
    if (this.props.user) {
      return (
        <button onClick={this.handleLogOut} className={"Header-nav-button"}>Log out</button>
      )
    }
  }

// If the props indicate that a model has been selected to show details, this function calls the selectDetailModelView function passed to it as props, which sets the value in state of the "select detail model view" to 0.
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

  twoButtonsOnly = () => {
    return (<div className="Header">
    <div className="iSim-logo">iSim</div>

    <div className="Header-nav-button-container-two-buttons">

      <Link to="/home">
      <button onClick={this.clickHelper} className="Header-nav-button" >Home</button>
      </Link>
      <Link to="/about" >
      <button className="Header-nav-button">About</button>
      </Link>
      {this.logOutButton()}
      </div>
      </div>)
  }

  threeButtons = () => {
    return (<div className="Header">
    <div className="iSim-logo">iSim</div>

    <div className="Header-nav-button-container-three-buttons">

      <Link to="/home">
      <button onClick={this.clickHelper} className="Header-nav-button" >Home</button>
      </Link>
      <Link to="/about" >
      <button className="Header-nav-button">About</button>
      </Link>
      {this.logOutButton()}
      </div>
      </div>)
  }

  render() {
    return (
      (this.props.user) ? this.threeButtons() : this.twoButtonsOnly()
    )
  }
}

export default Header;
