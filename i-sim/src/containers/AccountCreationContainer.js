import React from 'react';
import Header from '../components/Header';
import AccountCreationBox from '../components/AccountCreationBox';

class AboutCreationContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am an account creation container.
        <Header />
        <AccountCreationBox />
      </div>
    )
  }
}

export default AboutCreationContainer;
