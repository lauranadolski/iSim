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

    fetch(deleteRequestURL, deleteConfig)

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
        <li key={this.props.model.name}>
          {this.props.model.name}
          <button onClick={this.detailViewHelper}>Show Detailed View</button>
          <button onClick={this.editModelHelper}>Edit</button>
          <button onClick={this.handleDelete}>X</button>
        </li>
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
