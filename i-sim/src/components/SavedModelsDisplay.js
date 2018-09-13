import React from 'react';
import SavedModelsDetailCard from './SavedModelsDetailCard';

class SavedModelsDisplay extends React.Component {

  renderSavedModels = () => {
    console.log("hello these are models", this.props.models);
    return this.props.models.loggedInUserModels.map((savedModel) => {
      return (
        <SavedModelsDetailCard model={savedModel} key={savedModel.id} selectDetailModelView={this.props.selectDetailModelView}
        toggleEditingModelBoolean={this.props.toggleEditingModelBoolean}
        selectModelToEdit={this.props.selectModelToEdit}/>
      )
    })
  }

  render() {
    return (
      <div className="Saved-models-container">
        <div className="My-saved-models-label">Saved Models</div>
        <ul>
          {this.renderSavedModels()}
        </ul>
      </div>
    )
  }
}

export default SavedModelsDisplay;
