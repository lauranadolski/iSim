import React from 'react';
import Header from '../components/Header';
import ThreeDModel from '../components/ThreeDModel';

class CreateNewModelContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am a create new model container.
        <Header />
        <ThreeDModel />
      </div>
    )
  }
}

export default CreateNewModelContainer;
