import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <div>
        <Link to="/home">
        <button>Home</button>
        </Link>
        <Link to="/about">
        <button>About</button>
        </Link>
      </div>
    )
  }
}

export default Header;
