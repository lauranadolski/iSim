import React from 'react';
import Header from '../components/Header';
import ThreeDModel from '../components/ThreeDModel';

class ModelViewContainer extends React.Component {


  render() {
    return (
      <div>
        {console.log("my model prop cateegories look like this", this.props.selectedModel.categories)}
        {this.props.selectedModel.name}
        <ThreeDModel selectedModel={this.props.selectedModel}/>
      </div>
    )
  }
}

export default ModelViewContainer;
