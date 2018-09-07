import React from 'react';

class SavedModelsDisplay extends React.Component {

  renderSavedModels = () => {
    console.log("hello your mom is hot", this.props.models.allModels);
    return this.props.models.allModels.map((savedModel) => {
      return (
        <li key={savedModel.name}>
          {savedModel.name}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        My Saved Models:
        <ul>
          {this.renderSavedModels()}
        </ul>
      </div>
    )
  }
}

export default SavedModelsDisplay;
