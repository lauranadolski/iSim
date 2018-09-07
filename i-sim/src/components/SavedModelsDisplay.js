import React from 'react';

class SavedModelsDisplay extends React.Component {

  renderSavedModels = () => {
    console.log("hello these are models", this.props.models);
    return this.props.models.loggedInUserModels.map((savedModel) => {
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
