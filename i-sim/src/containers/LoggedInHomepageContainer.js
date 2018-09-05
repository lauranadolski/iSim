import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header';
import SavedModelsDisplay from '../components/SavedModelsDisplay';
import { connect } from 'react-redux';

class LoggedInHomepageContainer extends React.Component {

  render() {
    return (
      <div>
        Hello, I am a logged in homepage container.
        <Header />
        <Link to="/create-new-model">
          <button>Create New Model</button>
        </Link>
        <SavedModelsDisplay models={this.props.models}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    models: state.models
  };
}

export default connect(mapStateToProps)(LoggedInHomepageContainer);

// don't export ^^ ????
// export default LoggedInHomepageContainer;
