import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import ModelViewContainer from './ModelViewContainer';
import ThreeDModel from '../components/ThreeDModel';
import { connect } from 'react-redux';
import { createNewModel, addAllModels, grabUserModels, selectDetailModelView, toggleEditingModelBoolean, selectModelToEdit } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router';
import EditModelSidebar from '../components/EditModelSidebar';


class LoggedInHomepageContainer extends React.Component {

  componentDidMount() {
    console.log("I'm in the logged-in homepage container. Here's my logged in state status:", this.props.user.loggedIn)

    let intersectionalityModelsAPIURL = 'http://localhost:3000/api/v1/intersectionality_models'

    let getConfig = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    }

    if (this.props.user)(
    fetch(intersectionalityModelsAPIURL, getConfig)
    .then(response => response.json())
    .then( data => {
      console.log("ugh again", data)
      this.props.addAllModels(data)
      console.log("we are here", this.props.models.allModels)
      this.props.grabUserModels(this.grabOnlyLoggedInUserModels())
    })
  )
  }

  grabOnlyLoggedInUserModels = () => {
  if (this.props.user.user) {
    return this.props.models.allModels.filter( (model) => {
      return model.user.id === this.props.user.user.id
    } )
  }
  }

  findSelectedModelFromIdDetailView = () => {
    return this.props.models.loggedInUserModels.find((model) => {
      return model.id === this.props.models.selectedModelDetailView
    })
  }

  findSelectedModelFromIdEditView = () => {
    return this.props.models.loggedInUserModels.find((model) => {
      return model.id === this.props.models.targetEditModel
    })
  }


  showSavedModelsOrDetailsOrEdit = () => {

    if (this.props.models.selectedModelDetailView > 0) {
      return (
        <ModelViewContainer
        selectedModel={this.findSelectedModelFromIdDetailView()}
        />
      )

    } else if (this.props.models.targetEditModel > 0) {
      return (
        <EditModelSidebar
        selectedModelToEdit={this.findSelectedModelFromIdEditView()}
        />)

    } else {
      return (
        <div>
        <div className="Create-new-model-button">
        Create New Model
        
        <br />
        <Link to="/create-new-model">
          <button className="Create-new-model-plus-button"><div className="Plus-text">+</div></button>
        </Link>
        </div>

        <SavedModelsDisplay models={this.props.models} selectDetailModelView={this.props.selectDetailModelView}
        toggleEditingModelBoolean={this.props.toggleEditingModelBoolean}
        selectModelToEdit={this.props.selectModelToEdit} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} selectDetailModelView={this.props.selectDetailModelView}
        selectModelToEdit={this.props.selectModelToEdit}
        />
        {this.showSavedModelsOrDetailsOrEdit()}
        <br />
        <br />
      </div>
    )
  }
}


const mapStateToProps = state => ({ models: state.models, user: state.user })

const mapDispatchToProps = dispatch => ({
  addAllModels: thingie => dispatch(addAllModels(thingie)),
  grabUserModels: thingie => dispatch(grabUserModels(thingie)),
  selectDetailModelView: thingie => dispatch(selectDetailModelView(thingie)),
  toggleEditingModelBoolean: thingie => dispatch(toggleEditingModelBoolean(thingie)),
  selectModelToEdit: thingie => dispatch(selectModelToEdit(thingie))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepageContainer)
