import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import { connect } from 'react-redux';
import { createNewModel } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class LoggedInHomepageContainer extends React.Component {

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

function mapStateToProps(state) {
  return {
    models: state.models
  };
}

// Anything returned from this function will end up as props on this LoggedInHomepageContainer container.
function mapDispatchToProps(dispatch) {
  // Whenever a new model is "saved", the result should be passed to all our reducers.
  return bindActionCreators({ createNewModel: createNewModel }, dispatch)
}

// This makes LoggedInHomepageContainer a container. It needs to know about this new dispatch method, createNewModel. It makes it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepageContainer);
