import React from 'react';

class SavedModelsDisplay extends React.Component {

  renderSavedModels = () => {
    return this.props.models.map((savedModel) => {
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
        Hello, I am a saved models display.
        <ul>
          {this.renderSavedModels()}
        </ul>
      </div>
    )
  }
}

export default SavedModelsDisplay;
