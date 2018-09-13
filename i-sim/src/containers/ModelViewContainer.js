import React from 'react';
import Header from '../components/Header';
import ThreeDModel from '../components/ThreeDModel';

class ModelViewContainer extends React.Component {


  render() {
    return (
      <div>
        <div className="Model-view-name-text">{this.props.selectedModel.name}</div>
        <ThreeDModel selectedModel={this.props.selectedModel}/>
      </div>
    )
  }
}

export default ModelViewContainer;
