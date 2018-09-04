import React from 'react';
import Header from '../components/Header';
import LoginAndAccountCreationButtonBox from '../components/LoginAndAccountCreationButtonBox';

class LandingPageContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am a landing page container.
        <Header />
        <LoginAndAccountCreationButtonBox />
      </div>
    )
  }
}

export default LandingPageContainer;
