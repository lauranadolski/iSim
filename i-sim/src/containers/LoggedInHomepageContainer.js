import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import ThreeDModel from '../components/ThreeDModel';
import { connect } from 'react-redux';
import { createNewModel, addAllModels, grabUserModels } from '../actions/index.js';
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



    // debugger;
    // console.log("hey i'm in the component did mount followed by the user and logged in", this.props.user.user, this.props.user.loggedIn)
    // fetch('http://localhost:3000/api/v1/intersectionality_models')
    // .then(response => response.json())
    // .then(response => console.log("your mom", response))
    // .then( data => {
    //   this.props.addAllModels(data)
    //   console.log("we are here", this.props.models.allModels)
    //   this.props.grabUserModels(this.grabOnlyLoggedInUserModels())
    // })
    // .then( console.log("hi HEY HELLO", this.props.models) )
  }

  grabOnlyLoggedInUserModels = () => {
    // console.log("I am helping", this.props.user.user.id)
    // debugger;
  if (this.props.user.user) {
    return this.props.models.allModels.filter( (model) => {
      return model.user.id === this.props.user.user.id
    } )
  }
  }

  render() {
    return (




      <div>
        Hello, I am a logged in homepage container.
        <Header user={this.props.user}/>
        <Link to="/create-new-model">
          <button>Create New Model</button>
        </Link>
        <SavedModelsDisplay models={this.props.models} />

        <br />
        <br />
        <ThreeDModel />
      </div>

    )
  }
}


const mapStateToProps = state => ({ models: state.models, user: state.user })

const mapDispatchToProps = dispatch => ({
  addAllModels: thingie => dispatch(addAllModels(thingie)),
  grabUserModels: thingie => dispatch(grabUserModels(thingie)),

})

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepageContainer)




// fetchData = () => {
//        if (token) {
//        let helper = 'http://localhost:3000/api/v1/intersectionality_models'
//        const fetchObject = {
//            method: ‘GET’,
//            headers: {
//                ‘Content-Type’: ‘Application/json’,
//                ‘Authorization’: `Bearer ${localStorage.jwt}`
//            }
//        }
//
//        return fetch(helper, fetchObject)
//        .then(resp => resp.json())
//        .then(console.log(resp))
//
//        .then(data => this.setState({
//            upcoming_bill_data: data.bills,
//            changing_upcoming_bill_data: data.bills
//        }))
//        }
//    }
