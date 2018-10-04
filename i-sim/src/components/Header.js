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
        <button onClick={this.handleLogOut} className={"Header-nav-button"}>Log out</button>
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
