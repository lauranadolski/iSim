import React from 'react';
import Header from '../components/Header';
import ThreeDModel from '../components/ThreeDModel';

class ModelViewContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am a model view container. This is my model ID number:
        {this.props.modelID}
        <ThreeDModel />
      </div>
    )
  }
}

export default ModelViewContainer;
