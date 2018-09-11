import React from 'react';
import Header from '../components/Header';
import LoginAndAccountCreationButtonBox from '../components/LoginAndAccountCreationButtonBox';
import ThreeDModel from '../components/ThreeDModel';

class LandingPageContainer extends React.Component {


  render() {
    return (
      <div>
        <Header />
        <LoginAndAccountCreationButtonBox />
        <ThreeDModel />
      </div>
    )
  }
}

export default LandingPageContainer;
