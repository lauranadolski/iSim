import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

  logOutButton = () => {
    if (this.props.user) {
      return (
        <button>Log out</button>
      )
    }
  }

  render() {
    return (
      <div>
        <Link to="/home">
        <button>Home</button>
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
