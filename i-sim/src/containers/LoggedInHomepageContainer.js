import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import ModelViewContainer from './ModelViewContainer';
import ThreeDModel from '../components/ThreeDModel';
import { connect } from 'react-redux';
import { createNewModel, addAllModels, grabUserModels, selectDetailModelView } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router'


class LoggedInHomepageContainer extends React.Component {

  componentDidMount() {
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
    // .then(data => console.log("HIIIIIIIIASDSADS", data))
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

  findSelectedModelFromId = () => {
    return this.props.models.loggedInUserModels.find((model) => {
      return model.id === this.props.models.selectedModelDetailView
    })
  }


  showSavedModelsOrDetails = () => {

    if (this.props.models.selectedModelDetailView > 0) {
      return (
        <ModelViewContainer
        selectedModel={this.findSelectedModelFromId()}
        />
      )

    } else {
      return (
        <div>
        <Link to="/create-new-model">
          <button>Create New Model</button>
        </Link>

        <SavedModelsDisplay models={this.props.models} selectDetailModelView={this.props.selectDetailModelView} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        Hello, I am a logged in homepage container.
        <Header user={this.props.user} selectDetailModelView={this.props.selectDetailModelView}/>
        {this.showSavedModelsOrDetails()}
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
  selectDetailModelView: thingie => dispatch(selectDetailModelView(thingie))

})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepageContainer)
