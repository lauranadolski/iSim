import React from 'react';
import SavedModelsDetailCard from './SavedModelsDetailCard';

class SavedModelsDisplay extends React.Component {

  renderSavedModels = () => {
    console.log("hello these are models", this.props.models);
    return this.props.models.loggedInUserModels.map((savedModel) => {
      return (
        <SavedModelsDetailCard model={savedModel} />
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
