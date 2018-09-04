import React from 'react';
import Header from '../components/Header';

class LoggedInHomepageContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am a logged in homepage container.
        <Header />
      </div>
    )
  }
}

export default LoggedInHomepageContainer;
