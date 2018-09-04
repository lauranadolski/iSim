import React from 'react';
import Header from '../components/Header';
import CreateNewModelSidebar from '../components/CreateNewModelSidebar';
import ThreeDModel from '../components/ThreeDModel';

class CreateNewModelContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am a create new model container.
        <Header />
        <CreateNewModelSidebar />
        <ThreeDModel />
      </div>
    )
  }
}

export default CreateNewModelContainer;
