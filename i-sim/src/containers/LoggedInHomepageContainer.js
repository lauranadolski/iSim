import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import { connect } from 'react-redux';
import { createNewModel } from '../actions/index.js';
import { addAllModels } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class LoggedInHomepageContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/intersectionality_models')
    .then(response => response.json())
    .then( data => this.props.addAllModels(data) )
    .then( console.log("hi", this.props.models) )
  }

  grabOnlyLoggedInUserModels = () => {
    this.props.models.AllModels.filter( (model) => {
      return model.user.id === 5
    } )
  }

  render() {
    return (
      <div>
        Hello, I am a logged in homepage container.
        <Header />
        <Link to="/create-new-model">
          <button>Create New Model</button>
        </Link>
        <SavedModelsDisplay models={this.props.models} />
      </div>
    )
  }
}


const mapStateToProps = state => ({ models: state.models })

const mapDispatchToProps = dispatch => ({
  addAllModels: thingie => dispatch(addAllModels(thingie))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepageContainer)
