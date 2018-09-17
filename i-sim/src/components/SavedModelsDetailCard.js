import React from 'react';
import EditModelSidebar from './EditModelSidebar';

class SavedModelsDetailCard extends React.Component {

  handleDelete = () => {

    let apiURL = 'http://localhost:3000/api/v1/intersectionality_models'
    let targetModelID = this.props.model.id
    let deleteRequestURL = `${apiURL}/${targetModelID}`
    let deleteConfig = {
      method: 'DELETE',
      headers: {
        "Content-type": 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    }

    fetch(deleteRequestURL, deleteConfig).then(this.forceRefresh())

  }

  forceRefresh = () => {
    window.location.reload();
  }

  editModelHelper = () => {
    console.log("hey, i'm here!")
    // debugger;
    this.props.selectModelToEdit(this.props.model.id)
    // this.props.toggleEditingModelBoolean(this.props.model.id)
  }

  detailViewHelper = () => {
    this.props.selectDetailModelView(this.props.model.id)
  }





  renderSavedModelDetails = () => {
      return (
        <div>
        <div key={this.props.model.name} className="Saved-model-card">
          {this.props.model.name}


          <button onClick={this.detailViewHelper} className="Saved-model-detail-view-button"></button>


          <button onClick={this.editModelHelper} className="Saved-model-edit-view-button">Edit</button>
          <button onClick={this.handleDelete}
          className="Saved-model-edit-view-button">X</button>
        </div>
        <br />
        </div>
      )
  }

  render() {
    return (
      <div>
          {this.renderSavedModelDetails()}
      </div>
    )
  }
}

export default SavedModelsDetailCard;
